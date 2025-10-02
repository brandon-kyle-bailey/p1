# -------------------------------
# Configuration
# -------------------------------
$AccountID = "YOUR_ACCOUNT_ID_HERE"
$InstallDir = "C:\Program Files\P1"
$BinaryName = "p1.exe"
$ServiceName = "P1Agent"
$ServiceDisplayName = "P1 Agent Service"

# -------------------------------
# Create install directory
# -------------------------------
if (-Not (Test-Path $InstallDir)) {
    Write-Host "Creating installation directory $InstallDir..."
    New-Item -ItemType Directory -Path $InstallDir | Out-Null
}

# -------------------------------
# Copy binary
# -------------------------------
Write-Host "Copying binary to $InstallDir..."
Copy-Item -Path ".\$BinaryName" -Destination "$InstallDir\$BinaryName" -Force

# -------------------------------
# Install service
# -------------------------------
if (Get-Service -Name $ServiceName -ErrorAction SilentlyContinue) {
    Write-Host "Service $ServiceName already exists. Stopping and removing..."
    Stop-Service -Name $ServiceName -Force
    sc.exe delete $ServiceName | Out-Null
}

Write-Host "Creating Windows service $ServiceName..."
sc.exe create $ServiceName `
    binPath= "`"$InstallDir\$BinaryName`" --account-id $AccountID" `
    DisplayName= "$ServiceDisplayName" `
    start= auto `
    obj= "NT AUTHORITY\LocalService" `
    type= own

# -------------------------------
# Start service
# -------------------------------
Write-Host "Starting $ServiceName..."
Start-Service -Name $ServiceName

# -------------------------------
# Installation complete 
# -------------------------------
Write-Host "Installation complete. Check service status with:"
Write-Host "  Get-Service -Name $ServiceName"
