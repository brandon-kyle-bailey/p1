// Package config
package config

import (
	"errors"
	"flag"
	"os"
	"strings"
)

type Config struct {
	AccountID  string
	Debug      bool
	Poll       int
	DBProvider string
	DBPath     string
	APIKey     string
	SecretKey  string
}

func Load() (*Config, error) {
	accountIDFlag := flag.String("account-id", "", "Account ID for RMM")
	debugFlag := flag.Bool("debug", false, "Enable debug mode")
	pollFlag := flag.Int("poll", 200, "Ticker polling interval (milliseconds)")

	flag.Parse()

	accountID := strings.TrimSpace(*accountIDFlag)
	if accountID == "" {
		accountID = strings.TrimSpace(os.Getenv("RMM_ACCOUNT_ID"))
	}
	if accountID == "" {
		return nil, errors.New("account-id is required (pass via --account-id or RMM_ACCOUNT_ID)")
	}

	return &Config{
		AccountID:  accountID,
		Debug:      *debugFlag,
		Poll:       *pollFlag,
		DBProvider: "sqlite",
		DBPath:     "activities.db",
		APIKey:     "900be976-5c0c-47ae-bac7-055718edf1f6",
		SecretKey:  "4b7ad3ec-a5ab-4f4f-852f-55797db5258a",
	}, nil
}
