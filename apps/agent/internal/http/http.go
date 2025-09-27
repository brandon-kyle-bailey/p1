// Package http
package http

import (
	"bytes"
	"crypto/hmac"
	"crypto/sha256"
	"encoding/hex"
	"encoding/json"
	"fmt"
	"net/http"
	"p1/agent/internal/logger"
	"time"
)

type HTTPClient struct {
	Client    *http.Client
	Logger    *logger.Logger
	APIKey    string
	SecretKey string
}

func NewHTTPClient(apiKey string, secretKey string, logger logger.Logger) *HTTPClient {
	return &HTTPClient{
		Client: &http.Client{
			Timeout: 5 * time.Second,
		},
		Logger:    &logger,
		APIKey:    apiKey,
		SecretKey: secretKey,
	}
}

func (c *HTTPClient) generateSignature(payload []byte, timestamp string) string {
	mac := hmac.New(sha256.New, []byte(c.SecretKey))
	mac.Write(payload)
	mac.Write([]byte(timestamp))
	return hex.EncodeToString(mac.Sum(nil))
}

func (c *HTTPClient) PostJSON(endpoint string, payload any) error {
	data, err := json.Marshal(payload)
	if err != nil {
		return err
	}

	timestamp := fmt.Sprintf("%d", time.Now().UnixMilli())
	signature := c.generateSignature(data, timestamp)

	req, err := http.NewRequest("POST", endpoint, bytes.NewBuffer(data))
	if err != nil {
		return err
	}

	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("X-API-KEY", c.APIKey)
	req.Header.Set("X-SIGNATURE", signature)
	req.Header.Set("X-TIMESTAMP", timestamp)

	resp, err := c.Client.Do(req)
	if err != nil {
		return err
	}
	defer resp.Body.Close()

	if resp.StatusCode >= 300 {
		c.Logger.Error(resp.Status, "ebb174a5-1494-47e9-b035-2640ec5d6d87")
		return fmt.Errorf("unexpected status: %s", resp.Status)
	}

	return nil
}
