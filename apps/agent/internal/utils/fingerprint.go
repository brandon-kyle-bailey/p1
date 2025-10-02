// Package utils
package utils

import (
	"crypto/sha256"
	"encoding/hex"
	"fmt"
	"io"
	"net"
	"net/http"
	"os"
	"p1/agent/internal/config"
	"runtime"
)

var cachedIP string

func IPAddress() string {
	if cachedIP != "" {
		return cachedIP
	}
	resp, err := http.Get("https://api.ipify.org")
	if err != nil {
		cachedIP = "unknown"
		return cachedIP
	}
	defer resp.Body.Close()
	body, err := io.ReadAll(resp.Body)
	if err != nil {
		cachedIP = "unknown"
		return cachedIP
	}
	cachedIP = string(body)
	return cachedIP
}

func Hostname() string {
	hostname, err := os.Hostname()
	if err != nil {
		return "unknown"
	}
	return hostname
}

func MacAddress() string {
	interfaces, err := net.Interfaces()
	if err != nil {
		return "unknown"
	}
	for _, i := range interfaces {
		if i.Flags&net.FlagLoopback != 0 {
			continue
		}
		if len(i.HardwareAddr) == 6 {
			return i.HardwareAddr.String()
		}
	}
	return "unknown"
}

func OperatingSystem() string {
	return runtime.GOOS
}

func Architecture() string {
	return runtime.GOARCH
}

func DeviceFingerprint(cfg *config.Config) string {
	hostuser := cfg.Username
	hostname := Hostname()
	mac := MacAddress()
	os := OperatingSystem()
	arch := Architecture()
	fingerprint := fmt.Sprintf("%s:%s:%s:%s:%s", hostuser, hostname, mac, os, arch)
	hash := sha256.Sum256([]byte(fingerprint))
	return hex.EncodeToString(hash[:])
}
