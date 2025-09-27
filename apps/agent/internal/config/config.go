// Package config
package config

import (
	"errors"
	"flag"
	"os"
	"strings"
)

type Config struct {
	AccountID string
	Debug     bool
	Poll      int
	DBPath    string
}

func Load() (*Config, error) {
	// Define all flags
	accountIDFlag := flag.String("account-id", "", "Account ID for RMM")
	debugFlag := flag.Bool("debug", false, "Enable debug mode")
	pollFlag := flag.Int("poll", 1, "Ticker polling interval (seconds)")

	// Parse once
	flag.Parse()

	// Env fallback + validation
	accountID := strings.TrimSpace(*accountIDFlag)
	if accountID == "" {
		accountID = strings.TrimSpace(os.Getenv("RMM_ACCOUNT_ID"))
	}
	if accountID == "" {
		return nil, errors.New("account-id is required (pass via --account-id or RMM_ACCOUNT_ID)")
	}

	return &Config{
		AccountID: accountID,
		Debug:     *debugFlag,
		Poll:      *pollFlag,
		DBPath:    "activities.db",
	}, nil
}
