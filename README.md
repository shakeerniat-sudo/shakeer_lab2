# Lab 2: SQLite Database and CRUD Routes

## Student Details

- **Name:** Jangli Mahammad Shakeer
- **Roll Number:** 106
- **Registration Number:** 252U1R5058
- **Section:** AIDE-2A
- **Course:** Backend Development Fundamentals


---

## Live Deployment

**Render URL:** https://shakeer-lab2.onrender.com

**GitHub Repository:** https://github.com/shakeerniat-sudo/shakeer_lab2

---

## 1. Objective

To connect an Express.js server with an SQLite database and implement CRUD (Create, Read, Update, Delete) operations through REST API endpoints.

## 2. Project Description

This project is a Book Management REST API developed using Node.js, Express.js, and SQLite.

The application allows users to retrieve all books, retrieve a particular book, add new books, update existing book details, and delete books from the database.

The API endpoints were tested using Postman, and the application was deployed using Render.

## 3. Technologies Used

- Node.js
- Express.js
- SQLite
- SQLite3
- Nodemon
- Postman
- Git and GitHub
- Render

## 4. Database Structure

**Database File:** `books.db`

**Table Name:** `book`

| Column | Data Type | Description |
|---|---|---|
| id | INTEGER PRIMARY KEY | Unique book ID |
| title | TEXT | Book title |
| author | TEXT | Book author |
| price | INTEGER | Book price |
| pages | INTEGER | Number of pages |

Initially, 10 sample book records were inserted into the database using the SQLite CLI.

## 5. Project Folder Structure

```text
lab-02/
│
├── app.js
├── books.db
├── package.json
├── package-lock.json
├── .gitignore
├── README.md
│
└── screenshots/
   ── get-all-books.png
    ├── get-single-book.png
    ├── post-book.png
    ├── put-book.png
    ├── delete-book.png
    └── database.png

## 6. Installation and Execution

### Prerequisites

- Node.js
- npm
- SQLite
- VS Code

### Step 1: Clone the Repository

```bash
git clone https://github.com/shakeerniat-sudo/shakeer_lab2.git
```

### Step 2: Navigate to the Project Folder

```bash
cd shakeer_lab2
```

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Run the Development Server

```bash
npm run dev
```

### Step 5: Run the Production Server

```bash
npm start
```

**Local URL:** http://localhost:3000/

**Live URL:** https://shakeer-lab2.onrender.com

## 7. API Endpoints

The following five REST API endpoints are implemented.

| S.No | Method | Endpoint | Description |
|---|---|---|---|
| 1 | GET | `/books/` | Retrieve all books |
| 2 | GET | `/books/:bookId/` | Retrieve a book by ID |
| 3 | POST | `/books/` | Add a new book |
| 4 | PUT | `/books/:bookId/` | Update an existing book |
| 5 | DELETE | `/books/:bookId/` | Delete a book |

### 7.1 GET – Retrieve All Books

**Endpoint:** `GET /books/`

**Status Code:** 200 OK

Retrieves all book records from the SQLite database.

### 7.2 GET – Retrieve a Single Book

**Endpoint:** `GET /books/:bookId/`

**Status Code:** 200 OK

Retrieves a particular book using its unique ID.

### 7.3 POST – Add a New Book

**Endpoint:** `POST /books/`

**Status Code:** 201 Created

Adds a new book to the database.

**Request Body:**

```json
{
    "title": "Learning Node.js",
    "author": "John Smith",
    "price": 550,
    "pages": 400
}
```

### 7.4 PUT – Update an Existing Book

**Endpoint:** `PUT /books/:bookId/`

**Status Code:** 200 OK

Updates the details of an existing book.

**Request Body:**

```json
{
    "title": "Advanced Node.js",
    "author": "John Smith",
    "price": 650,
    "pages": 450
}
```

### 7.5 DELETE – Remove a Book

**Endpoint:** `DELETE /books/:bookId/`

**Status Code:** 200 OK

Deletes a book from the database using its ID.

## 8. Postman Testing Screenshots

All CRUD endpoints were tested using Postman with the deployed Render application.

### 8.1 GET All Books

Successfully retrieved all book records.

**Response:** 200 OK

<img width="1917" height="1038" alt="Get data" src="https://github.com/user-attachments/assets/efd9827b-459e-4ff7-a49b-de291eafa926" />


### 8.2 GET Single Book

Successfully retrieved a specific book using its ID.

**Response:** 200 OK
<img width="1677" height="948" alt="get single book" src="https://github.com/user-attachments/assets/963eaac7-6862-4823-926c-0322ae1aa963" />


### 8.3 POST – Add a New Book

Successfully added a new book named Learning Node.js.

**Response:** 201 Created

<img width="1917" height="1078" alt="POST" src="https://github.com/user-attachments/assets/b3cf1dc1-8514-4e5b-9496-9a6bb6424264" />


### 8.4 PUT – Update Book

Successfully updated the details of book ID 11.

**Response:** 200 OK

<img width="1917" height="1078" alt="PUT" src="https://github.com/user-attachments/assets/7f99ac34-d279-4cf5-8ca4-6c0c49cdb25f" />

### 8.5 DELETE – Remove Book

Successfully deleted book ID 11 from the database.

**Response:** 200 OK

<img width="1917" height="1066" alt="delete" src="https://github.com/user-attachments/assets/6431c5aa-a602-46c5-9d21-5b7dbdc2b95b" />


### 8.6 SQLite Database Verification

Verified the database records and changes using SQLite CLI.
<img width="1917" height="1038" alt="SQLite Database Verification" src="https://github.com/user-attachments/assets/b97c0fbf-f998-453c-9c4c-ec4925861229" />


<img width="1917" height="1078" alt="Screenshot 2026-11-01 150949" src="https://github.com/user-attachments/assets/0703a1a6-de99-4965-ae90-cbce40d1f001" />



## 9. Important Concepts Implemented

### Asynchronous Database Operations

Used async/await to handle database operations and ensure that the database connection is established before starting the Express server.

### Parameterized Queries

Used `?` placeholders in SQL queries to safely handle user input and help prevent SQL injection.

### CRUD Operations

Implemented Create, Read, Update, and Delete operations through five REST API endpoints.

### Error Handling

Used appropriate HTTP status codes:

- 200 – Successful request
- 201 – Resource created successfully
- 400 – Invalid request data
- 404 – Requested book not found
- 500 – Internal server error

### Database Initialization

Implemented an asynchronous `initializeDBAndServer()` function to establish the SQLite connection and start the Express server after a successful connection.

## 10. Problems Faced and Solutions

1. **SQLite Connection:** Configured the correct database file path to establish the connection.
2. **Deployment Compatibility:** Resolved SQLite3 native module compatibility issues during Render deployment.
3. **404 Error:** Checked the book ID and corrected the API URL when updating records.
4. **Database Verification:** Verified INSERT, UPDATE, and DELETE operations using SQLite queries.

## 11. Conclusion

Successfully developed a Book Management REST API using Node.js, Express.js, and SQLite.

Implemented all five CRUD endpoints, connected the Express server to the SQLite database, and tested the APIs using Postman.

The application was deployed on Render, providing practical experience in backend development, database connectivity, REST API development, parameterized SQL queries, API testing, and cloud deployment.

---

**Lab 2 Completed Successfully**
