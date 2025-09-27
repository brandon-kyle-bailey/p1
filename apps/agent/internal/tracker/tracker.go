// Package tracker
package tracker

type TrackerProvider interface {
	GetWindowName() (string, error)
	GetApplicationName() (string, error)
	GetExpression() (string, error)
}
