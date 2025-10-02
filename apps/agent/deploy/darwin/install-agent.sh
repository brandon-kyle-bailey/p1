#!/usr/bin/env bash
set -euo pipefail

# -------------------------------
# Configuration
# -------------------------------
ACCOUNT_ID="YOUR_ACCOUNT_ID_HERE"
INSTALL_DIR="/usr/local/p1"
BINARY_NAME="p1"
PLIST_NAME="com.p1.agent.plist"
LOG_FILE="/Library/Logs/p1-agent.log"
USER_NAME="_p1agent" # system user

# -------------------------------
# Create user
# -------------------------------
if ! id -u "$USER_NAME" >/dev/null 2>&1; then
  echo "Creating system user $USER_NAME..."
  sudo dscl . -create /Users/$USER_NAME
  sudo dscl . -create /Users/$USER_NAME UserShell /usr/bin/false
  sudo dscl . -create /Users/$USER_NAME NFSHomeDirectory /var/empty
fi

# -------------------------------
# Create install directory
# -------------------------------
echo "Creating installation directory $INSTALL_DIR..."
sudo mkdir -p "$INSTALL_DIR"
sudo chown "$USER_NAME":"$USER_NAME" "$INSTALL_DIR"

# -------------------------------
# Copy binary
# -------------------------------
echo "Copying binary to $INSTALL_DIR..."
sudo cp "./$BINARY_NAME" "$INSTALL_DIR/$BINARY_NAME"
sudo chown "$USER_NAME":"$USER_NAME" "$INSTALL_DIR/$BINARY_NAME"
sudo chmod 755 "$INSTALL_DIR/$BINARY_NAME"

# -------------------------------
# Create LaunchDaemon plist
# -------------------------------
PLIST_PATH="/Library/LaunchDaemons/$PLIST_NAME"

echo "Creating LaunchDaemon plist $PLIST_PATH..."
sudo tee "$PLIST_PATH" >/dev/null <<EOF
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" 
 "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
  <dict>
    <key>Label</key>
    <string>com.p1.agent</string>
    <key>ProgramArguments</key>
    <array>
      <string>$INSTALL_DIR/$BINARY_NAME</string>
      <string>--account-id</string>
      <string>$ACCOUNT_ID</string>
    </array>
    <key>RunAtLoad</key>
    <true/>
    <key>KeepAlive</key>
    <true/>
    <key>StandardOutPath</key>
    <string>$LOG_FILE</string>
    <key>StandardErrorPath</key>
    <string>$LOG_FILE</string>
    <key>UserName</key>
    <string>$USER_NAME</string>
    <key>WorkingDirectory</key>
    <string>$INSTALL_DIR</string>
  </dict>
</plist>
EOF

# -------------------------------
# Set ownership and permissions
# -------------------------------
sudo chown root:wheel "$PLIST_PATH"
sudo chmod 644 "$PLIST_PATH"
sudo touch "$LOG_FILE"
sudo chown "$USER_NAME":"$USER_NAME" "$LOG_FILE"

# -------------------------------
# Load and start the LaunchDaemon
# -------------------------------
echo "Loading and starting LaunchDaemon..."
sudo launchctl bootstrap system "$PLIST_PATH"
sudo launchctl enable system/com.p1.agent

# -------------------------------
# Installation complete
# -------------------------------
echo "Installation complete. Check status with:"
echo "  sudo launchctl print system/com.p1.agent"
