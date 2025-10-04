// Package utils
package utils

import (
	"fmt"
	"p1/agent/internal/config"
	"p1/agent/internal/http"

	"github.com/google/uuid"
)

type AuditDto struct {
	CorrelationID string `json:"correlationId"`
	Message       string `json:"message"`
}

func CreateAuditDto(message *string, correlationID *string) (AuditDto, error) {
	if message == nil || correlationID == nil {
		return AuditDto{}, nil
	}
	return AuditDto{
		Message:       *message,
		CorrelationID: uuid.MustParse(*correlationID).String(),
	}, nil
}

func FlushAuditLog(cfg *config.Config, httpClient *http.HTTPClient, audit *AuditDto) {
	if audit == nil {
		return
	}
	if !cfg.Dryrun {
		if err := httpClient.PostJSON(cfg.IngestionEndpoint, audit); err != nil {
			fmt.Println(err)
		}
	}
}
