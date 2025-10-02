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

	cfg, err := config.Load()
	if err != nil {
		panic(err)
	}

	log, err := logger.New(cfg.LogfilePath)
	if err != nil {
		panic(err)
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

	ticker := time.NewTicker(time.Duration(cfg.Poll) * time.Millisecond)
	defer ticker.Stop()

	fingerprint := utils.DeviceFingerprint(cfg)
	var previousActivity *db.Activity
	var wasInactive bool
	for {
		select {
		case <-ctx.Done():
			return
		case <-ticker.C:
			var idle, locked, suspended bool
			if provider != nil {
				idle, _ = provider.IsIdle()
				locked, _ = provider.IsLocked()
				suspended, _ = provider.IsSuspended()
			}
			inactive := idle || locked || suspended

			// flush only on transition from active → inactive
			if previousActivity != nil && inactive && !wasInactive {
				utils.FlushActivity(cfg, httpClient, conn, log, previousActivity)
				previousActivity = nil
			}

			wasInactive = inactive

			if inactive {
				continue
			}

			// business as usual
			windowName, windowTitle, windowExpression := "unknown", "unknown", "unknown"
			if provider != nil {
				if name, err := provider.GetApplicationName(); err == nil {
					windowName = name
				}
				if title, err := provider.GetWindowName(); err == nil {
					windowTitle = title
				}
				if expr, err := provider.GetExpression(); err == nil {
					windowExpression = expr
				}
			}
			newActivity := db.Activity{
				ID:                utils.NewUUID(),
				AccountID:         cfg.AccountID,
				DeviceFingerprint: fingerprint,
				Name:              windowName,
				Title:             windowTitle,
				Expression:        windowExpression,
				StartTime:         time.Now().UTC(),
			}
			if previousActivity == nil {
				previousActivity = &newActivity
				continue
			}
			if !reflect.DeepEqual(
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
			) {
				utils.FlushActivity(cfg, httpClient, conn, log, previousActivity)
				previousActivity = &newActivity
			}
		}
	}
}
