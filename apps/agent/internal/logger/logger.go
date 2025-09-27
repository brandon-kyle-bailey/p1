// Package logger
package logger

import (
	"log"
	"os"
	"time"
)

type LogEntry struct {
	Level         string `json:"level"`
	Message       string `json:"message"`
	CorrelationID string `json:"correlationId"`
	Timestamp     string `json:"timestamp"`
}

type Logger struct {
	out *os.File
}

func New(filePath string) (*Logger, error) {
	var output *os.File
	var err error
	if filePath != "" {
		output, err = os.OpenFile(filePath, os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0644)
		if err != nil {
			return nil, err
		}
	} else {
		output = os.Stdout
	}

	return &Logger{out: output}, nil
}

func (l *Logger) log(level, msg, correlationID string) {
	entry := LogEntry{
		Level:         level,
		Message:       msg,
		CorrelationID: correlationID,
		Timestamp:     time.Now().Format(time.RFC3339),
	}
	// data, _ := json.Marshal(entry)
	log.Printf(entry.Message)
}

func (l *Logger) Info(msg string, correlationID string) {
	l.log("INFO", msg, correlationID)
}

func (l *Logger) Debug(msg string, correlationID string) {
	l.log("DEBUG", msg, correlationID)
}

func (l *Logger) Error(msg string, correlationID string) {
	l.log("ERROR", msg, correlationID)
}

func (l *Logger) Fatal(msg string, correlationID string) {
	l.log("FATAL", msg, correlationID)
	os.Exit(1)
}
