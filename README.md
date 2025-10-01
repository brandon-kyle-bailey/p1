# Project P1

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

```

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
go build -o ./bin/p1-agent ./cmd/agent
./bin/p1-agent --account-id=<ACCOUNT_ID>
```

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

Once the infrastructure is provisioned and webextension installed, visit [http://localhost:8080/register](http://localhost:8080/register) and register with an email address and password.
<img width="1914" height="1085" alt="Screenshot From 2025-10-01 00-50-07" src="https://github.com/user-attachments/assets/d96fd505-8e74-42e4-ac09-75249eabb751" />
Once authenticated, visit [http://localhost:8080/account](http://localhost:8080/account) and grab your account-id, we'll use this to configure your agent properly.
<img width="893" height="539" alt="Screenshot From 2025-10-01 00-54-07" src="https://github.com/user-attachments/assets/2eb9ff15-116b-43db-a556-eb94192a6b0b" />
Log in to the webextension with the credentials you used to register with.
<img width="506" height="294" alt="Screenshot From 2025-10-01 00-51-18" src="https://github.com/user-attachments/assets/a40a04bf-2ffc-4488-9de8-3e9872f03677" />
Run the desktop extension via `./bin/p1-agent --account-id <YOUR ACCOUNT ID>`

You will then be able to see:
- Automatic App discovery via [http://localhost:8080/apps](http://localhost:8080/apps)
- Automatic Device discovery via [http://localhost:8080/devices](http://localhost:8080/devices)
- Extension and Agent sourced activities via [http://localhost:8080/dashboard](http://localhost:8080/dashboard)

Devices ingested from the source `agent` will be in an anonymous state until a device is claimed.
A device can be claimed by making an authenticated `PATCH` request for the given device id with the payload `{"userId":"<YOUR USER ID>"}`by visiting [http://localhost:3000/api/#/Device](http://localhost:3000/api/#/Device/DeviceController_update_v1)
You can generate a token by logging in via [http://localhost:3000/api/#/Auth/AuthController_login_v1](http://localhost:3000/api/#/Auth/AuthController_login_v1) and logging in with the credentials you used to register with.
file:///home/brandon/Pictures/Screenshots/Screenshot%20From%202025-10-01%2001-03-01.png
Once claimed, activities from the agent with this device will be associated to the given user.
