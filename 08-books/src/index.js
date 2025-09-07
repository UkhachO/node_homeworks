import 'dotenv/config';
import express from 'express';
import booksRouter from './routes/books.routes.js';
import notFound from './middlewares/notFound.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();

app.use(express.json());

app.get('/health', (req, res) => res.json({ ok: true }));

app.use('/books', booksRouter);

app.use(notFound);
app.use(errorHandler);

export default app;
