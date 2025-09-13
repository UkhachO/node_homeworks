import express from 'express';
import authRouter from './routers/auth.router.js';
import notFoundHandler from './middlewares/notFoundHandler.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.json({ ok: true }));

app.use('/api/auth', authRouter);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
