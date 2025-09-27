// Project: golang-sqlite-activity-tracker
// Files are separated with a header comment of the form: // --- filename.go ---
// Build: go 1.24.1+
// Dependencies: github.com/mattn/go-sqlite3
// Notes:
// - Active window detection uses platform-specific implementations:
// - Windows: Win32 API (GetForegroundWindow + GetWindowTextW)
// - macOS: osascript (AppleScript) to query frontmost application
// - Linux: xdotool (external dependency) to query focused window name
// - Log shipping: logger writes to local rotating file and periodically POSTs
// accumulated logs to configured webhook endpoint.
// - CLI: -accountId, -db (path), -webhook (url), -poll (seconds)
// - Unit tests included for DB and logger components.
module p1/agent

go 1.24.4

require github.com/mattn/go-sqlite3 v1.14.22

require github.com/google/uuid v1.6.0
