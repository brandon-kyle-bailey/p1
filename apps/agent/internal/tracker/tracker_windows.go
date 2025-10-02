//go:build windows
// +build windows

package tracker

import (
	"errors"
	"syscall"
	"time"
	"unicode/utf16"
	"unsafe"
)

var (
	user32                         = syscall.NewLazyDLL("user32.dll")
	psapi                          = syscall.NewLazyDLL("psapi.dll")
	kernel32                       = syscall.NewLazyDLL("kernel32.dll")
	wtsapi                         = syscall.NewLazyDLL("wtsapi32.dll")
	procGetForeground              = user32.NewProc("GetForegroundWindow")
	procGetWindowTextW             = user32.NewProc("GetWindowTextW")
	procGetWindowThread            = user32.NewProc("GetWindowThreadProcessId")
	procGetLastInput               = user32.NewProc("GetLastInputInfo")
	procOpenProcess                = kernel32.NewProc("OpenProcess")
	procCloseHandle                = kernel32.NewProc("CloseHandle")
	procGetModuleBaseNameW         = psapi.NewProc("GetModuleBaseNameW")
	procWTSQuerySessionInformation = wtsapi.NewProc("WTSQuerySessionInformationW")
)

const (
	PROCESS_QUERY_LIMITED_INFORMATION = 0x1000
	PROCESS_QUERY_INFORMATION         = 0x0400
	PROCESS_VM_READ                   = 0x0010
)

type lastInputInfo struct {
	cbSize uint32
	dwTime uint32
}

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

func (w *windowsProvider) IsIdle() (bool, error) {
	var lastInputInfo lastInputInfo
	lastInputInfo.cbSize = uint32(unsafe.Sizeof(lastInputInfo))
	r, _, err := procGetLastInput.Call(uintptr(unsafe.Pointer(&lastInputInfo)))
	if r == 0 {
		return false, err
	}

	idleMillis := uint32(time.Now().UnixMilli()) - lastInputInfo.dwTime
	return idleMillis > 60000, nil
}

func (w *windowsProvider) IsLocked() (bool, error) {
	var state uint32
	ret, _, err := procWTSQuerySessionInformation.Call(
		0xFFFFFFFF, // WTS_CURRENT_SESSION
		0,          // WTSConnectState
		uintptr(unsafe.Pointer(&state)),
	)
	if ret == 0 {
		return false, err
	}
	// 0 = Active, 1 = Connected, 2 = ConnectQuery, 3 = Shadow, 4 = Disconnected, 5 = Idle, 6 = Listen, 7 = Reset, 8 = Down, 9 = Init, 10 = Locked
	return state == 10, nil
}

var lastTick = time.Now()

func (w *windowsProvider) IsSuspended() (bool, error) {
	now := time.Now()
	delta := now.Sub(lastTick)
	lastTick = now
	if delta > 60*time.Second {
		return true, nil
	}
	return false, nil
}

func NewTrackerProvider() TrackerProvider { return &windowsProvider{} }
