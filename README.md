# Node.js with MongoDB

A minimal Node.js example showing how to connect to MongoDB (Atlas or local),
organize routes/controllers/models, and perform basic CRUD operations on an
`accounts` collection.

Prerequisites
- Node.js (v14+)
- npm
- A MongoDB connection string (Atlas or local)

Quick start
1. Install dependencies:

	npm install

2. Create a `.env` file in the project root and add your MongoDB URI:

	MONGO_URI="your-mongodb-connection-string"

	The repository uses `atlas_uri.js` which reads `process.env.MONGO_URI`.

3. Start the server:

	npm start

	The server listens on port 3000 by default.

API Endpoints
Base path: `/api/accounts`
- GET `/api/accounts` — list all accounts
- POST `/api/accounts` — create accounts (expects an array of account objects)
  Example request body:

  [
	 { "name": "Alice", "balance": 1000 },
	 { "name": "Bob", "balance": 500 }
  ]
- PUT `/api/accounts/:id` — update an account (partial update with JSON body)
- DELETE `/api/accounts/:id` — delete an account by id

Project structure
- `server.js` — app entry; mounts routes and connects to the database
- `config/db.js` — MongoDB connection helper (uses `atlas_uri.js`)
- `routes/account.routes.js` — HTTP routes for accounts
- `controllers/account.controller.js` — request handlers (CRUD)
- `models/account.model.js` — collection accessor

Notes
- `createAccounts` expects an array and uses `insertMany`.
- The app uses `dotenv`; store your `MONGO_URI` in `.env` for local development.

If you want, I can also add example curl requests or a simple Postman collection.
