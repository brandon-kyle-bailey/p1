// Package db
package db

import (
	"database/sql"
	"errors"
	"time"
)

var ErrNotFound = errors.New("not found")

type Activity struct {
	ID                string       `json:"id"`
	AccountID         string       `json:"account_id"`
	DeviceFingerprint string       `json:"device_fingerprint"`
	Name              string       `json:"name"`
	Title             string       `json:"title"`
	Expression        string       `json:"expression"`
	StartTime         time.Time    `json:"start_time"`
	EndTime           time.Time    `json:"end_time"`
	CreatedAt         time.Time    `json:"created_at"`
	UpdatedAt         time.Time    `json:"updated_at"`
	DeletedAt         sql.NullTime `json:"deleted_at"`
}

func InitDB(db *sql.DB) error {
	query := `
	CREATE TABLE IF NOT EXISTS activities (
		id TEXT PRIMARY KEY,
		account_id TEXT,
		device_fingerprint TEXT NOT NULL,
		name TEXT NOT NULL,
		title TEXT NOT NULL,
		expression TEXT NOT NULL,
		start_time DATETIME NOT NULL,
		end_time DATETIME NOT NULL,
		created_at DATETIME NOT NULL,
		updated_at DATETIME NOT NULL,
		deleted_at DATETIME
	);`
	_, err := db.Exec(query)
	return err
}

func InsertActivity(db *sql.DB, a Activity) error {
	now := time.Now().UTC()
	_, err := db.Exec(`
	INSERT INTO activities (
		id, account_id, device_fingerprint, name, title, expression, start_time, end_time, created_at, updated_at
	) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
		a.ID, a.AccountID, a.DeviceFingerprint, a.Name, a.Title, a.Expression, a.StartTime, a.EndTime, now, now,
	)
	return err
}

func GetActivityByID(db *sql.DB, id string) (Activity, error) {
	row := db.QueryRow(`
	SELECT id, account_id, device_fingerprint, name, title, expression, start_time, end_time, created_at, updated_at, deleted_at
	FROM activities WHERE id = ? AND deleted_at IS NULL`, id)

	var a Activity
	if err := row.Scan(
		&a.ID,
		&a.AccountID,
		&a.DeviceFingerprint,
		&a.Name,
		&a.Title,
		&a.Expression,
		&a.StartTime,
		&a.EndTime,
		&a.CreatedAt,
		&a.UpdatedAt,
		&a.DeletedAt,
	); err != nil {
		if err == sql.ErrNoRows {
			return a, ErrNotFound
		}
		return a, err
	}
	return a, nil
}

func GetAllActivities(db *sql.DB) ([]Activity, error) {
	rows, err := db.Query(`
	SELECT id, account_id, device_fingerprint, name, title, expression, start_time, end_time, created_at, updated_at, deleted_at
	FROM activities WHERE deleted_at IS NULL`)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var activities []Activity
	for rows.Next() {
		var a Activity
		if err := rows.Scan(
			&a.ID,
			&a.AccountID,
			&a.DeviceFingerprint,
			&a.Name,
			&a.Title,
			&a.Expression,
			&a.StartTime,
			&a.EndTime,
			&a.CreatedAt,
			&a.UpdatedAt,
			&a.DeletedAt,
		); err != nil {
			return nil, err
		}
		activities = append(activities, a)
	}
	return activities, nil
}

func UpdateActivity(db *sql.DB, a Activity) error {
	a.UpdatedAt = time.Now().UTC()
	_, err := db.Exec(`
	UPDATE activities SET
		account_id = ?, 
		device_fingerprint = ?, 
		name = ?, 
		title = ?, 
		expression = ?, 
		start_time = ?, 
		end_time = ?, 
		updated_at = ?
	WHERE id = ? AND deleted_at IS NULL`,
		a.AccountID, a.DeviceFingerprint, a.Name, a.Title, a.Expression, a.StartTime, a.EndTime, a.UpdatedAt, a.ID,
	)
	return err
}

func DeleteActivity(db *sql.DB, id string) error {
	_, err := db.Exec(`
	UPDATE activities SET deleted_at = ? WHERE id = ? AND deleted_at IS NULL`,
		time.Now().UTC(), id,
	)
	return err
}
