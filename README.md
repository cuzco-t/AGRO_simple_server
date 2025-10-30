# Simple Server

Node.js Express server with layered architecture (routes, controllers, business, models) and Sequelize for Postgres.

Setup
1. Copy `.env.example` to `.env` and fill your remote Postgres credentials.

2. Install dependencies:

```powershell
npm install
```

3. Start server:

```powershell
npm start
```

The server will attempt to connect to the Postgres database on startup. If connection fails it will still start but database operations will fail until correct env vars are provided.

API
- POST /api/smoke

Request body (JSON):

{
  "deviceId": "device-123",
  "value": 12.5,
  "unit": "ppm",
  "recordedAt": "2025-10-29T12:00:00Z"  // optional
}

Response: 201 Created with created record

Notes
- This project uses `sequelize.sync()` on start to create the `smoke` table if it does not exist. In production, prefer migrations.
