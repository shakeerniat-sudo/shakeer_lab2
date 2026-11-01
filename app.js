const express = require('express');
const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
const path = require('path');

const app = express();

app.use(express.json());

const dbPath = path.join(__dirname, 'books.db');

let db = null;
// GET: Retrieve all books
app.get('/books/', async (request, response) => {
    try {
        const query = `
            SELECT * FROM book;
        `;

        const books = await db.all(query);

        response.status(200).send(books);

    } catch (error) {
        response.status(500).send(error.message);
    }
});
// GET: Retrieve a book by ID
app.get('/books/:bookId/', async (request, response) => {
    try {
        const { bookId } = request.params;

        const query = `
            SELECT * FROM book
            WHERE id = ?;
        `;

        const book = await db.get(query, [bookId]);

        if (book === undefined) {
            return response.status(404).send('Book not found');
        }

        response.status(200).send(book);

    } catch (error) {
        response.status(500).send(error.message);
    }
});
// POST: Add a new book
app.post('/books/', async (request, response) => {
    try {
        const { title, author, price, pages } = request.body;

        if (
            typeof title !== 'string' || !title.trim() ||
            typeof author !== 'string' || !author.trim() ||
            !Number.isInteger(price) || price < 0 ||
            !Number.isInteger(pages) || pages <= 0
        ) {
            return response.status(400).send('Invalid book details');
        }

        const query = `
            INSERT INTO book (title, author, price, pages)
            VALUES (?, ?, ?, ?);
        `;

        const result = await db.run(query, [
            title.trim(),
            author.trim(),
            price,
            pages
        ]);

        response.status(201).send({
            message: 'Book added successfully',
            bookId: result.lastID
        });

    } catch (error) {
        response.status(500).send(error.message);
    }
});
// PUT: Update an existing book
app.put('/books/:bookId/', async (request, response) => {
    try {
        const { bookId } = request.params;
        const { title, author, price, pages } = request.body;

        if (
            typeof title !== 'string' || !title.trim() ||
            typeof author !== 'string' || !author.trim() ||
            !Number.isInteger(price) || price < 0 ||
            !Number.isInteger(pages) || pages <= 0
        ) {
            return response.status(400).send('Invalid book details');
        }

        const query = `
            UPDATE book
            SET title = ?, author = ?, price = ?, pages = ?
            WHERE id = ?;
        `;

        const result = await db.run(query, [
            title.trim(),
            author.trim(),
            price,
            pages,
            bookId
        ]);

        if (result.changes === 0) {
            return response.status(404).send('Book not found');
        }

        response.status(200).send('Book updated successfully');

    } catch (error) {
        response.status(500).send(error.message);
    }
});
// DELETE: Remove a book
app.delete('/books/:bookId/', async (request, response) => {
    try {
        const { bookId } = request.params;

        const query = `
            DELETE FROM book
            WHERE id = ?;
        `;

        const result = await db.run(query, [bookId]);

        if (result.changes === 0) {
            return response.status(404).send('Book not found');
        }

        response.status(200).send('Book deleted successfully');

    } catch (error) {
        response.status(500).send(error.message);
    }
});
// Initialize database and start server
const initializeDBAndServer = async () => {
    try {
        db = await open({
            filename: dbPath,
            driver: sqlite3.Database
        });

        console.log('Database connected successfully');

        app.listen(3000, () => {
            console.log('Server running at http://localhost:3000/');
        });

    } catch (error) {
        console.log(`DB Error: ${error.message}`);
        process.exit(1);
    }
};

initializeDBAndServer();