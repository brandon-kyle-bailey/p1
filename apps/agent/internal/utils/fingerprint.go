// Package utils
package utils

import (
	"crypto/sha256"
	"encoding/hex"
	"fmt"
	"net"
	"os"
	"runtime"
)

func Hostname() (string, error) {
	return os.Hostname()
}

func macAddress() (string, error) {
	macAddress := ""
	interfaces, err := net.Interfaces()
	if err != nil {
		return "", err
	}
	for _, i := range interfaces {
		if len(i.HardwareAddr) == 0 {
			continue
		}
		macAddress += i.HardwareAddr.String()
	}
	return macAddress, nil
}

func OperatingSystem() string {
	return runtime.GOOS
}

func Architecture() string {
	return runtime.GOARCH
}

func DeviceFingerprint() (string, error) {
	hostname, _ := Hostname()
	macAddress, _ := macAddress()
	os := OperatingSystem()
	arch := Architecture()
	fingerprint := fmt.Sprintf("%s:%s:%s:%s", hostname, macAddress, os, arch)
	hash := sha256.Sum256([]byte(fingerprint))
	return hex.EncodeToString(hash[:]), nil
}
