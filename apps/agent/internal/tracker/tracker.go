// Package tracker
package tracker

type IncommingActivityDto struct {
	IPAddress          string `json:"ipAddress"`
	Hostname           string `json:"hostname"`
	MacAddress         string `json:"macAddress"`
	Os                 string `json:"os"`
	Arch               string `json:"arch"`
	Source             string `json:"source"`
	ExternalActivityID string `json:"externalActivityId"`
	AccountID          string `json:"accountId"`
	DeviceFingerprint  string `json:"deviceFingerprint"`
	Name               string `json:"name"`
	Title              string `json:"title"`
	Expression         string `json:"expression"`
	StartTime          string `json:"startTime"`
	EndTime            string `json:"endTime"`
}

type TrackerProvider interface {
	GetWindowName() (string, error)
	GetApplicationName() (string, error)
	GetExpression() (string, error)
}
