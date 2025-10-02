//go:build darwin
// +build darwin

package tracker

import (
	"bufio"
	"bytes"
	"os/exec"
	"strconv"
	"strings"
)

type darwinProvider struct{}

func (d *darwinProvider) GetApplicationName() (string, error) {
	out, err := exec.Command("osascript", "-e",
		`tell application "System Events" to get name of first application process whose frontmost is true`).Output()
	if err != nil {
		return "", err
	}
	return strings.TrimSpace(string(out)), nil
}

func (d *darwinProvider) GetWindowName() (string, error) {
	out, err := exec.Command("osascript", "-e",
		`tell application "System Events" to tell (first application process whose frontmost is true) to get title of front window`).Output()
	if err != nil {
		return "", err
	}
	return strings.TrimSpace(string(out)), nil
}

func (d *darwinProvider) GetExpression() (string, error) {
	app, err := d.GetApplicationName()
	if err != nil {
		return "", err
	}

	var script string
	switch app {
	case "Safari":
		script = `tell application "Safari" to get URL of front document`
	case "Google Chrome", "Brave Browser", "Microsoft Edge":
		script = `tell application "` + app + `" to get URL of active tab of front window`
	default:
		return d.GetWindowName()
	}

	out, err := exec.Command("osascript", "-e", script).Output()
	if err != nil || len(out) == 0 {
		return d.GetWindowName()
	}

	return strings.TrimSpace(string(out)), nil
}

func parseIdle(data []byte) float64 {
	scanner := bufio.NewScanner(bytes.NewReader(data))
	for scanner.Scan() {
		line := scanner.Text()
		if strings.Contains(line, "HIDIdleTime") {
			parts := strings.Fields(line)
			if len(parts) > 1 {
				idleNs, err := strconv.ParseUint(parts[len(parts)-1], 10, 64)
				if err == nil {
					return float64(idleNs) / 1e9
				}
			}
		}
	}
	return 0
}

func (d *darwinProvider) IsIdle() (bool, error) {
	out, err := exec.Command("ioreg", "-c", "IOHIDSystem").Output()
	if err != nil {
		return false, err
	}
	// parse out IdleTime value from output (nanoseconds)
	return parseIdle(out) > 60, nil
}

func (d *darwinProvider) IsLocked() (bool, error) {
	out, err := exec.Command("osascript", "-e",
		`tell application "System Events" to get running of screen saver preferences`).Output()
	if err != nil {
		return false, err
	}
	return strings.TrimSpace(string(out)) == "true", nil
}

func (d *darwinProvider) IsSuspended() (bool, error) {
	return false, nil
}

func NewTrackerProvider() TrackerProvider { return &darwinProvider{} }
