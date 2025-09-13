import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import authRouter from './routes/auth.router.js';
import adminRouter from './routes/admin.router.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/admin', adminRouter);

app.use(errorHandler);

export default app;
