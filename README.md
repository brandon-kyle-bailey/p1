```markdown
# Project P2

Monorepo containing multiple applications spanning desktop, web, mobile, and browser extensions.

## Applications

### `agent`

- Language: Go
- Go version: >=1.24.1
- Description: Desktop agent that collects system and user activity, persists data to a local SQLite database, and sends it to the ingestion backend.
- Structure:
```

agent/
├── cmd # Main entry points
└── internal # Core libraries and business logic

```

### `backend`
- Language: TypeScript (NestJS)
- Description: API backend for data ingestion, processing, and management. Exposes REST endpoints for agents, web apps, and extensions.
- Structure:
```

backend/
├── node_modules
└── packages # Shared modules or internal packages

```

### `desktop`
- Language: TypeScript (Electron/React)
- Description: Cross-platform desktop application interface for the agent and backend.
- Structure:
```

desktop/
└── src # Main source code for the desktop app

```

### `native`
- Language: TypeScript (React Native / Expo)
- Description: Mobile app client for viewing and interacting with agent-collected data.
- Structure:
```

native/
├── app # Core application logic
├── assets # Images, fonts, and other static resources
├── components # UI components
├── constants # Shared constants
├── hooks # Custom React hooks
├── node_modules
└── scripts # Build and utility scripts

```

### `web`
- Language: TypeScript (Next.js / React)
- Description: Web application frontend for interacting with the backend APIs.
- Structure:
```

web/
├── node_modules
├── public # Static files
└── src # Source code

```

### `webextension`
- Language: JavaScript/TypeScript
- Description: Browser extension supporting Firefox and Chrome for activity tracking and integration with the backend.
- Structure:
```

webextension/
└── firefox # Firefox-specific extension code

````

## Setup

### Prerequisites
- Go >= 1.24.1 (for `agent`)
- Node.js >= 20, npm >= 9 (for `backend`, `web`, `desktop`, `native`)
- Yarn or npm for package management
- `docker` (optional, for backend services)

### Running

#### Agent
```bash
cd apps/agent
go build -o p1-agent ./cmd
./p1-agent --account-id=<ACCOUNT_ID>
````

#### Backend

```bash
cd apps/backend
npm install
cd apps/backend/packages/core
npm install
docker compose up db cache -d
npm run start:dev
```

#### Web

```bash
cd apps/web
npm install
npm run dev
```

#### Native

```bash
cd apps/native
npm install
npm run start
```

#### Webextension

```bash
cd apps/webextension
npm run build:firefox
npm run build:chrome
```

- Load `webextension/firefox` as a temporary add-on in Firefox.
- Chrome version available in `webextension/chrome`.

## Notes

- Agent data is stored in platform-standard locations (`~/.local/share/p1` on Linux, `%APPDATA%\p1` on Windows, `~/Library/Application Support/p1` on macOS).
- Process naming: agent binary should be named `p1-agent` for consistency in process monitors.

## Monorepo Structure

```
apps/
├── agent
├── backend
├── desktop
├── native
├── web
└── webextension
```

## Using the tools

Once the infrastructure is provisioned and webextension installed, visit `http://localhost:8080/register` and register with an email address and password.

Once authenticated, visit `http://localhost:8080/account` and grab your account-id, we'll use this to configure your agent properly.

Log in to the webextension with the credentials you used to register with.

Run the desktop extension via `./p1-agent --account-id <YOUR ACCOUNT ID>`
