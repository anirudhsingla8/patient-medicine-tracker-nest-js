# Nest Medicine Tracker

A NestJS-based backend application for tracking medicines, schedules, and user profiles. This project is a migration from a Spring Boot application.

## Prerequisites

-   Node.js (v16 or higher)
-   npm
-   PostgreSQL

## Setup

1.  **Clone the repository**
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Environment Configuration**:
    Create a `.env` file in the root directory with the following variables:
    ```env
    PORT=3000
    DB_HOST=your_db_host
    DB_PORT=5432
    DB_USERNAME=your_db_user
    DB_PASSWORD=your_db_password
    DB_DATABASE=medicine_tracker
    DB_SSL=true
    JWT_SECRET=your_jwt_secret
    CLOUDINARY_CLOUD_NAME=your_cloud_name
    CLOUDINARY_API_KEY=your_api_key
    CLOUDINARY_API_SECRET=your_api_secret
    ```

## Running the Application

```bash
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```

## API Routes

### Authentication (`/api/auth`)
-   `POST /api/auth/register`: Register a new user.
    -   Body: `{ "email": "user@example.com", "password": "password" }`
-   `POST /api/auth/login`: Login and receive JWT token.
    -   Body: `{ "email": "user@example.com", "password": "password" }`

### Users (`/api/users`)
-   `POST /api/users`: Create a new user (internal use).
-   `GET /api/users`: Get all users.
-   `GET /api/users/:id`: Get a specific user by ID.
-   `PATCH /api/users/:id`: Update a user.
-   `DELETE /api/users/:id`: Delete a user.

### Profiles (`/api/profiles`)
-   `POST /api/profiles`: Create a new profile.
-   `GET /api/profiles`: Get all profiles.
-   `GET /api/profiles/:id`: Get a specific profile by ID.
-   `PATCH /api/profiles/:id`: Update a profile.
-   `DELETE /api/profiles/:id`: Delete a profile.

### Medicines (`/api/medicines`)
-   `POST /api/medicines`: Add a new medicine.
-   `GET /api/medicines`: Get all medicines. Supports `?profileId=uuid` to filter by profile.
-   `GET /api/medicines/:id`: Get a specific medicine by ID.
-   `PATCH /api/medicines/:id`: Update a medicine. Supports `?profileId=uuid` to ensure ownership.
-   `DELETE /api/medicines/:id`: Delete a medicine. Supports `?profileId=uuid` to ensure ownership.

### Schedules (`/api/schedules`)
-   `POST /api/schedules`: Create a new schedule.
-   `GET /api/schedules`: Get all schedules.
-   `GET /api/schedules/:id`: Get a specific schedule by ID.
-   `PATCH /api/schedules/:id`: Update a schedule.
-   `DELETE /api/schedules/:id`: Delete a schedule.

### Global Medicines (`/api/global-medicines`)
-   `POST /api/global-medicines`: Add a global medicine entry.
-   `GET /api/global-medicines`: Get all global medicines.
-   `GET /api/global-medicines/:id`: Get a specific global medicine by ID.
-   `PATCH /api/global-medicines/:id`: Update a global medicine.
-   `DELETE /api/global-medicines/:id`: Delete a global medicine.

### Medicine Intakes (`/api/intakes`)
-   `POST /api/intakes`: Record a medicine intake.
    -   Body:
        ```json
        {
          "medicineId": "uuid",
          "profileId": "uuid",
          "scheduleId": "uuid (optional)",
          "status": "TAKEN | SKIPPED | MISSED",
          "takenAt": "2023-10-27T10:00:00Z",
          "notes": "Optional notes"
        }
        ```
-   `GET /api/intakes`: Get intake history.
    -   Query Params:
        -   `profileId` (Required)
        -   `medicineId` (Optional)
        -   `startDate` (Optional)
        -   `endDate` (Optional)

## License

[MIT](LICENSE)
