// Package utils
package utils

import (
	"database/sql"
	"fmt"
	"p1/agent/internal/config"
	"p1/agent/internal/db"
	"p1/agent/internal/http"
	"p1/agent/internal/logger"
	"p1/agent/internal/tracker"
	"time"

	"github.com/google/uuid"
)

func CreateActivityDto(config *config.Config, activity *db.Activity) (tracker.IncomingActivityDto, error) {
	if activity == nil {
		return tracker.IncomingActivityDto{}, nil
	}
	return tracker.IncomingActivityDto{
		Source:             "agent",
		AccountID:          uuid.MustParse(config.AccountID).String(),
		DeviceFingerprint:  activity.DeviceFingerprint,
		Name:               activity.Name,
		Title:              activity.Title,
		Expression:         activity.Expression,
		StartTime:          activity.StartTime.UTC().Format(time.RFC3339Nano),
		EndTime:            activity.EndTime.UTC().Format(time.RFC3339Nano),
		Hostuser:           config.Username,
		IPAddress:          IPAddress(),
		Hostname:           Hostname(),
		MacAddress:         MacAddress(),
		Os:                 OperatingSystem(),
		Arch:               Architecture(),
		ExternalActivityID: uuid.MustParse(activity.ID).String(),
	}, nil
}

func FlushActivity(cfg *config.Config, httpClient *http.HTTPClient, conn *sql.DB, log *logger.Logger, activity *db.Activity) {
	if activity == nil {
		return
	}
	activity.EndTime = time.Now().UTC()
	if err := db.InsertActivity(conn, *activity); err != nil {
		log.Error(err.Error(), "c6963021-6684-46a2-9591-c29518a497e9")
	}
	dto, err := CreateActivityDto(cfg, activity)
	if err != nil {
		log.Error(err.Error(), "b7d02848-aad5-4583-b799-e7a31e9de251")
	}
	log.Debug(fmt.Sprintf("Would post activity dto: %v", dto), "ef84857b-789f-42c1-87fb-f32af91b982d")
	if !cfg.Dryrun {
		if err := httpClient.PostJSON(cfg.IngestionEndpoint, dto); err != nil {
			log.Error(err.Error(), "c7353a7b-53f7-4e45-abea-4c7a2e7e6edc")
		}
	}
}
