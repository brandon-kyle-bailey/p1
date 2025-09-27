//go:build windows
// +build windows

package tracker

import (
	"errors"
	"syscall"
	"unicode/utf16"
	"unsafe"
)

var (
	user32                 = syscall.NewLazyDLL("user32.dll")
	psapi                  = syscall.NewLazyDLL("psapi.dll")
	kernel32               = syscall.NewLazyDLL("kernel32.dll")
	procGetForeground      = user32.NewProc("GetForegroundWindow")
	procGetWindowTextW     = user32.NewProc("GetWindowTextW")
	procGetWindowThread    = user32.NewProc("GetWindowThreadProcessId")
	procOpenProcess        = kernel32.NewProc("OpenProcess")
	procCloseHandle        = kernel32.NewProc("CloseHandle")
	procGetModuleBaseNameW = psapi.NewProc("GetModuleBaseNameW")
)

const (
	PROCESS_QUERY_LIMITED_INFORMATION = 0x1000
	PROCESS_QUERY_INFORMATION         = 0x0400
	PROCESS_VM_READ                   = 0x0010
)

type windowsProvider struct{}

func (w *windowsProvider) GetWindowName() (string, error) {
	hwnd, _, _ := procGetForeground.Call()
	if hwnd == 0 {
		return "", errors.New("no active window")
	}

	buf := make([]uint16, 512)
	r, _, _ := procGetWindowTextW.Call(hwnd, uintptr(unsafe.Pointer(&buf[0])), uintptr(len(buf)))
	if r == 0 {
		return "", errors.New("cannot get window text")
	}

	return string(utf16.Decode(buf[:r])), nil
}

func (w *windowsProvider) GetApplicationName() (string, error) {
	hwnd, _, _ := procGetForeground.Call()
	if hwnd == 0 {
		return "", errors.New("no active window")
	}

	var pid uint32
	procGetWindowThread.Call(hwnd, uintptr(unsafe.Pointer(&pid)))

	handle, _, _ := procOpenProcess.Call(PROCESS_QUERY_INFORMATION|PROCESS_VM_READ, 0, uintptr(pid))
	if handle == 0 {
		return "", errors.New("cannot open process")
	}
	defer procCloseHandle.Call(handle)

	buf := make([]uint16, 260)
	r, _, _ := procGetModuleBaseNameW.Call(handle, 0, uintptr(unsafe.Pointer(&buf[0])), uintptr(len(buf)))
	if r == 0 {
		return "", errors.New("cannot get process name")
	}

	return string(utf16.Decode(buf[:r])), nil
}

func (w *windowsProvider) GetExpression() (string, error) {
	app, err := w.GetApplicationName()
	if err != nil {
		return "", err
	}

	switch app {
	case "chrome.exe", "msedge.exe", "brave.exe":
		return w.GetWindowName()
	default:
		return w.GetWindowName()
	}
}

func NewTrackerProvider() TrackerProvider { return &windowsProvider{} }
