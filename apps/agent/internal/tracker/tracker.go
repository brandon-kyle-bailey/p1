// Package tracker
package tracker

type ActivityDto struct {
	Source            string `json:"source"`
	ActivityID        string `json:"activityId"`
	AccountID         string `json:"accountId"`
	DeviceFingerprint string `json:"deviceFingerprint"`
	Name              string `json:"name"`
	Title             string `json:"title"`
	Expression        string `json:"expression"`
	StartTime         string `json:"startTime"`
	EndTime           string `json:"endTime"`
}

type TrackerProvider interface {
	GetWindowName() (string, error)
	GetApplicationName() (string, error)
	GetExpression() (string, error)
}
