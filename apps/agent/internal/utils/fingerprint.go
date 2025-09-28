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
	"runtime"
)

func IPAddress() (string, error) {
	resp, err := http.Get("https://api.ipify.org")
	if err != nil {
		return "", err
	}
	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return "", err
	}

	return string(body), nil
}

func Hostname() (string, error) {
	return os.Hostname()
}

func MacAddress() (string, error) {
	interfaces, err := net.Interfaces()
	if err != nil {
		return "", err
	}
	for _, i := range interfaces {
		if len(i.HardwareAddr) > 0 {
			return i.HardwareAddr.String(), nil
		}
	}
	return "", nil
}

func OperatingSystem() string {
	return runtime.GOOS
}

func Architecture() string {
	return runtime.GOARCH
}

func DeviceFingerprint() (string, error) {
	hostname, err := Hostname()
	if err != nil {
		return "", err
	}

	mac, err := MacAddress()
	if err != nil {
		return "", err
	}

	os := OperatingSystem()
	arch := Architecture()

	fingerprint := fmt.Sprintf("%s:%s:%s:%s", hostname, mac, os, arch)
	hash := sha256.Sum256([]byte(fingerprint))
	return hex.EncodeToString(hash[:]), nil
}
