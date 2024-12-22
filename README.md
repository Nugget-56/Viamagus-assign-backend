## Installation Steps

   ```bash
   git clone https://github.com/Nugget-56/Viamagus-assign-backend.git

   cd Viamagus-assign-backend

   npm install

   npm run start
   ``` 

## API Endpoints

### Authentication

- **Login**

  - **URL:** `/auth/login`
  - **Method:** `POST`
  - **Description:** Authenticates a user and returns a JWT token.
  - **Request Body:**
    ```json
    {
      "username": "testuser",
      "password": "pass1234"
    }
    ```
  - **Response:**
    ```json
    {
      "token": "your_jwt_token_here"
    }
    ```

### Teams

- **Create Team**

  - **URL:** `/team`
  - **Method:** `POST`
  - **Description:** Creates a new team.
  - **Headers:**
    - `Authorization: Bearer {{accessToken}}`
    - `Content-Type: application/json`
  - **Request Body:**
    ```json
    {
      "name": "Engineering",
      "members": ["johnID", "janeID"]
    }
    ```
  - **Response:**
    ```json
    {
      "id": "60d0fe4f5311236168a109ca",
      "name": "Engineering",
      "members": ["johnID", "janeID"]
    }
    ```

- **Get Team by ID**

  - **URL:** `/team/{{teamId}}`
  - **Method:** `GET`
  - **Description:** Retrieves a team by its ID.
  - **Headers:**
    - `Authorization: Bearer {{accessToken}}`
  - **Response:**
    ```json
    {
      "id": "60d0fe4f5311236168a109ca",
      "name": "Engineering",
      "members": ["johnID", "janeID"]
    }
    ```

### Tasks

- **Create Task**

  - **URL:** `/task`
  - **Method:** `POST`
  - **Description:** Creates a new task.
  - **Headers:**
    - `Authorization: Bearer {{accessToken}}`
    - `Content-Type: application/json`
  - **Request Body:**
    ```json
    {
      "description": "Fix UI Bug",
      "dueDate": "2024-04-10T00:00:00.000Z",
      "assigneeId": "{{assigneeId}}",
      "status": "TODO",
      "teamId": "{{teamId}}"
    }
    ```
  - **Response:**
    ```json
    {
      "id": "60d0fe4f5311236168a109cb",
      "description": "Fix UI Bug",
      "dueDate": "2024-04-10T00:00:00.000Z",
      "assigneeId": "{{assigneeId}}",
      "status": "TODO",
      "teamId": "{{teamId}}"
    }
    ```

- **Get All Tasks**

  - **URL:** `/task`
  - **Method:** `GET`
  - **Description:** Retrieves all tasks.
  - **Headers:**
    - `Authorization: Bearer {{accessToken}}`
  - **Response:**
    ```json
    [
      {
        "id": "60d0fe4f5311236168a109cb",
        "description": "Fix UI Bug",
        "dueDate": "2024-04-10T00:00:00.000Z",
        "assigneeId": "johnID",
        "status": "TODO",
        "teamId": "60d0fe4f5311236168a109ca"
      },
      ...
    ]
    ```

- **Get Tasks by Assignee**

  - **URL:** `/task/assignee/{{assigneeId}}`
  - **Method:** `GET`
  - **Description:** Retrieves tasks assigned to a specific user.
  - **Headers:**
    - `Authorization: Bearer {{accessToken}}`
  - **Response:**
    ```json
    [
      {
        "id": "60d0fe4f5311236168a109cb",
        "description": "Fix UI Bug",
        "dueDate": "2024-04-10T00:00:00.000Z",
        "assigneeId": "{{assigneeId}}",
        "status": "TODO",
        "teamId": "{{teamId}}"
      },
      ...
    ]
    ```

- **Assign Task**

  - **URL:** `/task/{{taskId}}/assign/{{assigneeId}}`
  - **Method:** `PATCH`
  - **Description:** Assigns a task to a user.
  - **Headers:**
    - `Authorization: Bearer {{accessToken}}`
    - `Content-Type: application/json`
  - **Response:**
    ```json
    {
      "id": "60d0fe4f5311236168a109cb",
      "description": "Fix UI Bug",
      "dueDate": "2024-04-10T00:00:00.000Z",
      "assigneeId": "{{assigneeId}}",
      "status": "IN_PROGRESS",
      "teamId": "{{teamId}}"
    }
    ```

- **Update Task**

  - **URL:** `/task/{{taskId}}`
  - **Method:** `PUT`
  - **Description:** Updates task details.
  - **Headers:**
    - `Authorization: Bearer {{accessToken}}`
    - `Content-Type: application/json`
  - **Request Body:**
    ```json
    {
      "description": "Fix UI Bug (updated)",
      "status": "IN_PROGRESS",
      "dueDate": "2024-04-12T00:00:00.000Z"
    }
    ```
  - **Response:**
    ```json
    {
      "id": "60d0fe4f5311236168a109cb",
      "description": "Fix UI Bug (updated)",
      "dueDate": "2024-04-12T00:00:00.000Z",
      "assigneeId": "{{assigneeId}}",
      "status": "IN_PROGRESS",
      "teamId": "{{teamId}}"
    }
    ```

- **Delete Task**

  - **URL:** `/task/{{taskId}}`
  - **Method:** `DELETE`
  - **Description:** Deletes a task.
  - **Headers:**
    - `Authorization: Bearer {{accessToken}}`
  - **Response:**
    ```json
    {
      "message": "Task deleted successfully."
    }
    ```