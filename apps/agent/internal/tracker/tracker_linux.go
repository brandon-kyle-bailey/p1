//go:build linux
// +build linux

package tracker

import (
	"bytes"
	"os/exec"
	"strings"
)

type linuxProvider struct{}

func (l *linuxProvider) getWindowID() (string, error) {
	out, err := exec.Command("xdotool", "getwindowfocus").Output()
	if err != nil {
		return "", err
	}
	return strings.TrimSpace(string(out)), nil
}

func (l *linuxProvider) GetWindowName() (string, error) {
	out, err := exec.Command("xdotool", "getwindowfocus", "getwindowname").Output()
	if err != nil {
		return "", err
	}
	return strings.TrimSpace(string(out)), nil
}

func (l *linuxProvider) GetApplicationName() (string, error) {
	out, err := l.getWindowID()
	if err != nil {
		return "", err
	}
	windowID := strings.TrimSpace(string(out))

	app, err := exec.Command("xprop", "-id", windowID, "WM_CLASS").Output()
	if err != nil {
		return "unknown", nil
	}

	parts := bytes.Split(app, []byte(`"`))
	if len(parts) >= 4 {
		name := string(parts[3])
		return name, nil
	}

	return "unknown", nil
}

func (l *linuxProvider) GetExpression() (string, error) {
	out, err := exec.Command("xdotool", "getwindowfocus", "getwindowname").Output()
	if err != nil {
		return "", err
	}
	return strings.TrimSpace(string(out)), nil
}

func NewTrackerProvider() TrackerProvider { return &linuxProvider{} }
