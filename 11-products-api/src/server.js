import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import notFoundHandler from './middlewares/notFoundHandler.js';
import errorHandler from './middlewares/errorHandler.js';
import productsRouter from './routers/products.router.js';

const startServer = () => {
  const app = express();

  app.use(cors());
  app.use(cookieParser());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use('/public', express.static('public'));

  app.get('/health', (_req, res) => res.json({ ok: true }));

  app.use('/api/products', productsRouter);

  app.use(notFoundHandler);
  app.use(errorHandler);

  const port = Number(process.env.PORT) || 3000;
  app.listen(port, () => console.log(`Server running on ${port} port`));
};

export default startServer;
