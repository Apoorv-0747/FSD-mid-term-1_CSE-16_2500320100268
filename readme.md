# Student Management API

## Project Description

The Student Management API is a RESTful API developed using Node.js and Express.js. It allows users to create, retrieve, update and delete student records.

## Technologies Used

* Node.js
* Express.js
* JavaScript
* Thunder Client
* Visual Studio Code

## Features / Functionalities

1. **Create Student (POST):** Add a new student with ID, name, email, course and age.
2. **Get All Students (GET):** Retrieve all student records.
3. **Get Student by ID (GET):** Search for a student using their unique ID.
4. **Update Student (PUT):** Update existing student details.
5. **Delete Student (DELETE):** Delete a student using their ID.
6. **Validation:** Check mandatory fields and prevent duplicate student IDs.
7. **Error Handling:** Handle errors using appropriate HTTP status codes.

## Project Structure

```text
FSD-mid-term-1_CSE-16_2500320100268/
│
├── node_modules/
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── readme.md
```

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Apoorv-0747/FSD-mid-term-1_CSE-16_2500320100268.git
```

### 2. Navigate to Project Folder

```bash
cd FSD-mid-term-1_CSE-16_2500320100268
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment

Create a `.env` file and add:

```env
PORT=3000
```

### 5. Start the Server

```bash
node server.js
```

Server runs at:

`http://localhost:3000`

## API Endpoints

| HTTP Method | Endpoint            | Description            |
| ----------- | ------------------- | ---------------------- |
| POST        | `/api/students`     | Create a new student   |
| GET         | `/api/students`     | Retrieve all students  |
| GET         | `/api/students/:id` | Retrieve student by ID |
| PUT         | `/api/students/:id` | Update student details |
| DELETE      | `/api/students/:id` | Delete a student       |

## Sample JSON Request

```json
{
  "id": 1,
  "name": "Apoorv",
  "email": "apoorv@gmail.com",
  "course": "CSE",
  "age": 20
}
```

## HTTP Status Codes

| Status Code | Description           |
| ----------- | --------------------- |
| 200         | OK                    |
| 201         | Created               |
| 400         | Bad Request           |
| 404         | Not Found             |
| 409         | Conflict              |
| 500         | Internal Server Error |

## API Testing

All API endpoints are tested using Thunder Client in Visual Studio Code.

## Data Storage

Student records are stored in an in-memory JavaScript array. Data is lost when the server restarts.

## Author Details

**Name:** Apoorv Verma
**Roll Number:** 2500320100268
**Branch:** Computer Science and Engineering
