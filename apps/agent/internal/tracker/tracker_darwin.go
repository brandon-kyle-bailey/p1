//go:build darwin
// +build darwin

package tracker

import (
	"os/exec"
	"strings"
)

/*
#cgo LDFLAGS: -framework IOKit -framework CoreFoundation
#include <IOKit/IOKitLib.h>
#include <IOKit/hidsystem/IOHIDLib.h>
*/
import "C"

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

func (d *darwinProvider) IsIdle() (bool, error) {
	idle := C.IOHIDGetTimeSinceLastInput()
	return float64(idle)/1000 > 60, nil
}

func (d *darwinProvider) IsLocked() (bool, error) {
	// Use CGSessionCopyCurrentDictionary from CoreGraphics to check for loginwindow status
	dict := C.CGSessionCopyCurrentDictionary()
	if dict == nil {
		return false, nil
	}
	defer C.CFRelease(C.CFTypeRef(dict))

	// Check for kCGSSessionScreenIsLocked key
	locked := C.CFDictionaryGetValue(dict, C.CFSTR("CGSSessionScreenIsLocked"))
	if locked != nil {
		return true, nil
	}
	return false, nil
}

func (d *darwinProvider) IsSuspended() (bool, error) {
	return false, nil
}

func NewTrackerProvider() TrackerProvider { return &darwinProvider{} }
