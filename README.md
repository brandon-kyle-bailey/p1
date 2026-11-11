# P1

A cross-platform activity tracking platform built to collect, process and visualise activity across devices and applications.

P1 combines a lightweight Go agent, browser extension and desktop and mobile clients with a central API and web application. It brings together activity from multiple sources to provide visibility into how devices and applications are being used.

## Architecture

```text
                   ┌──────────────────┐
                   │   Web Client     │
                   │  Next.js / React │
                   └────────┬─────────┘
                            │
┌────────────────┐          │          ┌──────────────────┐
│ Desktop Agent  │          │          │ Browser Extension│
│      Go        │          │          │    TypeScript    │
└────────┬───────┘          │          └────────┬─────────┘
         │                  │                   │
         └──────────────────┼───────────────────┘
                            │
                   ┌────────▼─────────┐
                   │    API Backend   │
                   │  NestJS / Node.js│
                   └────────┬─────────┘
                            │
                   ┌────────▼─────────┐
                   │    Data Store    │
                   │   PostgreSQL     │
                   └──────────────────┘

          Desktop Client          Mobile Client
          Electron / React        React Native / Expo
```

## Applications

| Application    | Technology         | Responsibility                                                                              |
| -------------- | ------------------ | ------------------------------------------------------------------------------------------- |
| `agent`        | Go, SQLite         | Collects system and user activity, stores it locally and sends it to the ingestion backend. |
| `backend`      | TypeScript, NestJS | API for activity ingestion, processing, device management and application data.             |
| `desktop`      | Electron, React    | Cross-platform desktop interface.                                                           |
| `native`       | React Native, Expo | Mobile client for viewing and interacting with collected activity.                          |
| `web`          | Next.js, React     | Web interface for dashboards, devices, applications and account management.                 |
| `webextension` | TypeScript         | Firefox and Chrome extensions for browser activity tracking.                                |

## Features

- **Activity collection** — Collect system, application and browser activity from multiple sources.
- **Application discovery** — Automatically discover installed and active applications, with AI-assisted enrichment.
- **Device discovery** — Register and manage devices reporting activity.
- **Centralised ingestion** — Send activity from agents and extensions to a shared backend.
- **Local persistence** — Store agent-collected data in SQLite before sending it upstream.
- **Cross-platform clients** — Access activity through desktop, web and mobile applications.

## Technology

- **Languages:** Go, TypeScript
- **Backend:** NestJS, Node.js
- **Frontend:** React, Next.js
- **Desktop:** Electron
- **Mobile:** React Native, Expo
- **Data:** PostgreSQL, SQLite
- **Infrastructure:** Docker

## Getting Started

### Prerequisites

- Go 1.24.1 or later
- Node.js 20 or later
- npm 9 or later
- Docker (for backend services)

### Backend

```bash
cd apps/backend
npm install

cd packages/core
npm install

docker compose up db cache -d
npm run start:dev
```

### Web application

```bash
cd apps/web
npm install
npm run dev
```

### Desktop agent

```bash
cd apps/agent
go build -o ./bin/p1-agent ./cmd/agent
./bin/p1-agent --account-id=<ACCOUNT_ID>
```

### Mobile application

```bash
cd apps/native
npm install
npm run start
```

### Browser extension

```bash
cd apps/webextension
npm run build:firefox
npm run build:chrome
```

Load the generated extension build into Firefox or Chrome.

## Using P1

Once the backend and web application are running:

1. Open `http://localhost:8080/register` and create an account.
2. Sign in and visit `http://localhost:8080/account` to retrieve your account ID.
3. Sign in to the browser extension using your account credentials.
4. Start the desktop agent with your account ID:

   ```bash
   ./bin/p1-agent --account-id=<ACCOUNT_ID>
   ```

5. View collected activity and discovered resources in the web application.

### Exploring the platform

| Route        | Description                                           |
| ------------ | ----------------------------------------------------- |
| `/dashboard` | Activity collected from agents and browser extensions |
| `/apps`      | Discovered applications and AI-assisted enrichment    |
| `/devices`   | Devices reporting activity                            |
| `/account`   | Account information and account ID                    |

### Device registration

Devices discovered through the agent initially appear in an unclaimed state.

To associate a device with a user, authenticate with the API and send an authenticated `PATCH` request to the device endpoint with the appropriate device ID and user ID:

```json
{
  "userId": "<YOUR_USER_ID>"
}
```

Once claimed, activity from that device is associated with the corresponding user.

## Repository Structure

```text
apps/
├── agent/          # Go activity collection agent
├── backend/        # NestJS API and backend packages
├── desktop/        # Electron desktop application
├── native/         # React Native mobile application
├── web/            # Next.js web application
└── webextension/   # Browser extensions
```
