package main

import (
	"context"
	"database/sql"
	"os"
	"os/signal"
	"p1/agent/internal/config"
	"p1/agent/internal/db"
	"p1/agent/internal/http"
	"p1/agent/internal/logger"
	"p1/agent/internal/tracker"
	"p1/agent/internal/utils"
	"path/filepath"
	"reflect"
	"time"

	_ "modernc.org/sqlite"
)

func main() {
	ctx, stop := signal.NotifyContext(context.Background(), os.Interrupt)
	defer stop()

	log, err := logger.New("")
	if err != nil {
		panic(err)
	}

	cfg, err := config.Load()
	if err != nil {
		log.Fatal(err.Error(), "1dba498b-e3e1-46f2-a523-59a66a2f592b")
	}

	httpClient := http.NewHTTPClient(cfg.APIKey, cfg.SecretKey, *log)

	dbPath := cfg.DBPath
	if !filepath.IsAbs(dbPath) {
		dbPath, _ = filepath.Abs(dbPath)
	}
	conn, err := sql.Open(cfg.DBProvider, dbPath)
	if err != nil {
		log.Fatal(err.Error(), "0cc8248d-2fde-4174-bd18-b16e3b168a26")
	}
	defer conn.Close()

	if err := db.InitDB(conn); err != nil {
		log.Fatal(err.Error(), "23aae196-bdf4-4b0d-a4b8-e1a9c3ea217b")
	}

	provider := tracker.NewTrackerProvider()
	if provider == nil {
		log.Fatal("active window provider not available on this platform", "38e1dc35-ae97-49f5-8fab-0d570392c024")
	}

	fingerprint, _ := utils.DeviceFingerprint()
	ticker := time.NewTicker(time.Duration(cfg.Poll) * time.Millisecond)
	defer ticker.Stop()

	var previousActivity *db.Activity
	for {
		select {
		case <-ctx.Done():
			return
		case <-ticker.C:
			expression := "unknown"
			appName := "unknown"
			if provider != nil {
				if windowName, err := provider.GetWindowName(); err == nil {
					expression = windowName
				}
				if softwareName, err := provider.GetApplicationName(); err == nil {
					appName = softwareName
				}
			}
			newActivity := db.Activity{
				ID:                utils.NewUUID(),
				AccountID:         cfg.AccountID,
				DeviceFingerprint: fingerprint,
				Name:              appName,
				Title:             expression,
				Expression:        expression,
				StartTime:         time.Now().UTC(),
			}
			if previousActivity == nil {
				previousActivity = &newActivity
				continue
			}
			activitiesMatch := reflect.DeepEqual(
				db.Activity{
					Name:       previousActivity.Name,
					Title:      previousActivity.Title,
					Expression: previousActivity.Expression,
				},
				db.Activity{
					Name:       newActivity.Name,
					Title:      newActivity.Title,
					Expression: newActivity.Expression,
				},
			)
			if !activitiesMatch {
				now := time.Now().UTC()
				previousActivity.EndTime = now
				err := db.InsertActivity(conn, *previousActivity)
				if err != nil {
					log.Error(err.Error(), "a3db9416-e79f-4551-b125-bda3b37129ba")
				}
				err = httpClient.PostJSON(cfg.IngestionEndpoint, previousActivity)
				if err != nil {
					log.Fatal(err.Error(), "0c4dce23-9b20-41dd-bb22-506ad1eed880")
				}
				previousActivity = &newActivity
			}
		}
	}
}
