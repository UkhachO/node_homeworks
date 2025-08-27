import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import { authMiddleware } from './middlewares/authMiddleware.js';

const startServer = () => {
  const app = express();

  app.use(cors());

  app.use(authMiddleware, (req, res) => {
    res.status(200).type('text/plain').send('Authorization header received');
  });

  const port = Number(process.env.PORT) || 3000;

  app.listen(port, () => console.log(`Server running on ${port} port`));
};

export default startServer;