// Package config
package config

import (
	"errors"
	"flag"
	"fmt"
	"os"
	"os/user"
	"path/filepath"
	"runtime"
	"strings"
)

type Config struct {
	AccountID         string
	Debug             bool
	Dryrun            bool
	Poll              int
	DBProvider        string
	DBPath            string
	LogfilePath       string
	IngestionEndpoint string
	APIKey            string
	SecretKey         string
	Username          string
}

func defaultAppDir() (string, error) {
	var baseDir string
	switch runtime.GOOS {
	case "windows":
		baseDir = os.Getenv("APPDATA")
	case "darwin":
		home, err := os.UserHomeDir()
		if err != nil {
			return "", err
		}
		baseDir = filepath.Join(home, "Library", "Application Support")
	default: // linux/unix
		baseDir = os.Getenv("XDG_DATA_HOME")
		if baseDir == "" {
			home, err := os.UserHomeDir()
			if err != nil {
				return "", err
			}
			baseDir = filepath.Join(home, ".local", "share")
		}
	}
	appDir := filepath.Join(baseDir, "p1")
	if err := os.MkdirAll(appDir, 0o755); err != nil {
		return "", err
	}
	fmt.Println(appDir)
	return appDir, nil
}

func Load() (*Config, error) {
	accountIDFlag := flag.String("account-id", "", "Account ID for RMM")
	debugFlag := flag.Bool("debug", false, "Enable debug mode")
	dryrunFlag := flag.Bool("dry-run", false, "Enable dry run mode")
	pollFlag := flag.Int("poll", 200, "Ticker polling interval (milliseconds)")

	flag.Parse()

	accountID := strings.TrimSpace(*accountIDFlag)
	if accountID == "" {
		accountID = strings.TrimSpace(os.Getenv("RMM_ACCOUNT_ID"))
	}
	if accountID == "" {
		return nil, errors.New("account-id is required (pass via --account-id or RMM_ACCOUNT_ID)")
	}

	appDir, err := defaultAppDir()
	if err != nil {
		return nil, err
	}

	usr, err := user.Current()
	username := ""
	if err == nil {
		username = usr.Username
	} else {
		if runtime.GOOS == "windows" {
			username = os.Getenv("USERNAME")
		} else {
			username = os.Getenv("USER")
		}
	}

	return &Config{
		AccountID:         accountID,
		Debug:             *debugFlag,
		Dryrun:            *dryrunFlag,
		Poll:              *pollFlag,
		DBProvider:        "sqlite",
		DBPath:            filepath.Join(appDir, "p1.db"),
		LogfilePath:       "",
		IngestionEndpoint: "http://localhost:3000/api/core/v1/incoming-activities/agent",
		APIKey:            "900be976-5c0c-47ae-bac7-055718edf1f6",
		SecretKey:         "4b7ad3ec-a5ab-4f4f-852f-55797db5258a",
		Username:          username,
		// LogfilePath:       filepath.Join(appDir, "p1.log"),
	}, nil
}
