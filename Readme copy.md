git clone <your-repo-url>
# MongoDB Atlas CRUD API

A simple RESTful API using Node.js, Express, and the MongoDB native driver, connected to MongoDB Atlas. The project follows a basic MVC-style structure with separate routes, controllers, and models.

## Features

- Create multiple accounts
- Retrieve all accounts
- Update an account by ID
- Delete an account by ID
- Connect to MongoDB Atlas

## Tech Stack

- Node.js
- Express
- MongoDB (native driver)
- MongoDB Atlas
- dotenv

## Project Structure

```
project/
├── server.js
├── config/
│   └── db.js
├── models/
│   └── account.model.js
├── controllers/
│   └── account.controller.js
├── routes/
│   └── account.routes.js
├── atlas_uri.js
├── .env
└── package.json
```

## Prerequisites

- Node.js (v14+ recommended)
- npm
- A MongoDB Atlas cluster and connection string

## Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd <project-folder>
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the project root with your MongoDB URI:

```
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/?retryWrites=true&w=majority
```

Replace `<username>` and `<password>` with your Atlas credentials.

## Running the server

Start the server with:

```bash
node server.js
```

By default the server runs on http://localhost:3000 unless your `server.js` specifies a different port.

## API Endpoints

Base URL: `http://localhost:3000/api/accounts`

- Create accounts

  - Method: `POST`
  - Endpoint: `/api/accounts`
  - Request body (JSON array):

    ```json
    [
      {
        "name": "Mariappan",
        "age": 22,
        "email": "mariappan@gmail.com"
      },
      {
        "name": "Mari Selvan",
        "age": 26,
        "email": "mari_selvan@gmail.com"
      }
    ]
    ```

  - Successful response example:

    ```json
    {
      "message": "Accounts created successfully",
      "insertedIds": {
        "0": "ObjectId(...)",
        "1": "ObjectId(...)"
      }
    }
    ```

- Get all accounts

  - Method: `GET`
  - Endpoint: `/api/accounts`
  - Response example:

    ```json
    [
      {
        "_id": "...",
        "name": "Mariappan",
        "age": 22,
        "email": "mariappan@gmail.com"
      }
    ]
    ```

- Update account

  - Method: `PUT`
  - Endpoint: `/api/accounts/:id`
  - Example request body:

    ```json
    {
      "age": 25
    }
    ```

- Delete account

  - Method: `DELETE`
  - Endpoint: `/api/accounts/:id`

## Notes

- Keep your `.env` file out of version control. Add it to `.gitignore` if needed.
- If you prefer using `npm` scripts, add a `start` script to `package.json` (e.g., `"start": "node server.js"`).

## License

This project has no license specified. Add a `LICENSE` file if you want to open-source it.