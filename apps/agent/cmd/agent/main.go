package main

import (
	"context"
	"database/sql"
	"fmt"
	"os"
	"os/signal"
	"p1/agent/internal/config"
	"p1/agent/internal/db"
	"p1/agent/internal/logger"
	"p1/agent/internal/tracker"
	"p1/agent/internal/utils"
	"path/filepath"
	"time"

	_ "github.com/mattn/go-sqlite3"
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

	if !filepath.IsAbs(cfg.DBPath) {
		p, _ := filepath.Abs(cfg.DBPath)
		conn, err := sql.Open("sqlite3", p)
		if err != nil {
			log.Fatal(fmt.Sprintf("open db: %v", err), "6317723f-68ea-46db-be76-c9d3987dce73")
		}
		defer conn.Close()

		if err := db.InitDB(conn); err != nil {
			log.Fatal(fmt.Sprintf("init db: %v", err), "84e8e1b8-4ea7-4115-a439-5bd20aaf6509")
		}
	}

	log.Info("Agent started", "f42675d9-0728-4295-94a6-5fc084d3742d")
	defer log.Info("Agent Stopped", "725fcbc0-b9ef-4ab2-842e-7abe7e9c295d")

	provider := tracker.NewTrackerProvider()
	if provider == nil {
		log.Info("active window provider not available on this platform", "38e1dc35-ae97-49f5-8fab-0d570392c024")
	}

	ticker := time.NewTicker(time.Duration(cfg.Poll) * time.Second)
	defer ticker.Stop()

	for {
		select {
		case <-ctx.Done():
			log.Debug("Interrupt invoked. Returning", "40b4f245-0651-4d5c-8cec-ba683177728d")
			return
		case <-ticker.C:
			log.Debug("Ticker invoked", "18adfa2f-53be-40bd-b1be-0305e5e715cb")
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
			act := db.Activity{
				ID:         utils.NewUUID(),
				Timestamp:  time.Now().UTC(),
				AccountID:  cfg.AccountID,
				Name:       appName,
				Title:      expression,
				Expression: expression,
			}
			log.Debug(fmt.Sprintf("Activity created: %+v", act), "4e7577af-2afa-4475-9baf-86c2804dc2ad")
		}
	}
}
