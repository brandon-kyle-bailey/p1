//go:build linux
// +build linux

package tracker

import (
	"bytes"
	"os"
	"os/exec"
	"strconv"
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

func (l *linuxProvider) IsIdle() (bool, error) {
	out, err := exec.Command("dbus-send",
		"--session",
		"--dest=org.gnome.Mutter.IdleMonitor",
		"--print-reply",
		"/org/gnome/Mutter/IdleMonitor/Core",
		"org.gnome.Mutter.IdleMonitor.GetIdletime").Output()
	if err != nil {
		return false, err
	}

	// Split into fields
	parts := strings.Fields(string(out))
	if len(parts) < 1 {
		return false, nil
	}

	// Find the last numeric field
	var ms int
	for i := len(parts) - 1; i >= 0; i-- {
		ms64, err := strconv.ParseUint(parts[i], 10, 64)
		if err == nil {
			ms = int(ms64)
			break
		}
	}
	return ms > 60_000, nil
}

func (l *linuxProvider) IsLocked() (bool, error) {
	out, err := exec.Command("dbus-send",
		"--session",
		"--dest=org.gnome.ScreenSaver",
		"--print-reply",
		"/org/gnome/ScreenSaver",
		"org.gnome.ScreenSaver.GetActive").Output()
	if err != nil {
		return false, err
	}
	return strings.Contains(string(out), "boolean true"), nil
}

func (l *linuxProvider) IsSuspended() (bool, error) {
	user := os.Getenv("USER")
	out, err := exec.Command("loginctl", "list-sessions", "--no-legend").Output()
	if err != nil {
		return false, err
	}

	lines := strings.Split(strings.TrimSpace(string(out)), "\n")
	var sessionID string
	for _, line := range lines {
		fields := strings.Fields(line)
		if len(fields) >= 2 && fields[1] == user {
			sessionID = fields[0]
			break
		}
	}
	if sessionID == "" {
		return false, nil
	}

	out, err = exec.Command("loginctl", "show-session", sessionID, "-p", "Active").Output()
	if err != nil {
		return false, err
	}

	return strings.Contains(string(out), "Active=no"), nil
}

func NewTrackerProvider() TrackerProvider { return &linuxProvider{} }
