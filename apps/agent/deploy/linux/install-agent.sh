#!/usr/bin/env bash
set -euo pipefail

# -------------------------------
# Configuration
# -------------------------------
ACCOUNT_ID="YOUR_ACCOUNT_ID_HERE"
INSTALL_DIR="/opt/p1"
BINARY_NAME="p1"
SERVICE_NAME="p1.service"
USER_NAME="p1user"

# -------------------------------
# Create user
# -------------------------------
if ! id -u "$USER_NAME" >/dev/null 2>&1; then
  echo "Creating system user $USER_NAME..."
  sudo useradd --system --no-create-home --shell /usr/sbin/nologin "$USER_NAME"
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
# Create systemd service
# -------------------------------
SERVICE_PATH="/etc/systemd/system/$SERVICE_NAME"

echo "Creating systemd service $SERVICE_PATH..."
sudo tee "$SERVICE_PATH" >/dev/null <<EOF
[Unit]
Description=Agent Service
After=network.target

[Service]
Type=simple
User=$USER_NAME
ExecStart=$INSTALL_DIR/$BINARY_NAME --account-id $ACCOUNT_ID
Restart=always
RestartSec=10
WorkingDirectory=$INSTALL_DIR

[Install]
WantedBy=multi-user.target
EOF

# -------------------------------
# Enable and start service
# -------------------------------
echo "Reloading systemd daemon..."
sudo systemctl daemon-reload

echo "Enabling $SERVICE_NAME to start on boot..."
sudo systemctl enable "$SERVICE_NAME"

echo "Starting $SERVICE_NAME..."
sudo systemctl start "$SERVICE_NAME"

echo "Installation complete. Service status:"
sudo systemctl status "$SERVICE_NAME" --no-pager
