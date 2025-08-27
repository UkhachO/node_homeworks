import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import boomRoute from './routes/boom.route.js';
import { errorLogger } from './middlewares/errorLogger.js';

const startServer = () => {
  const app = express();

  app.use(cors());

  app.use('/boom', boomRoute);

  app.use(errorLogger);

  const port = Number(process.env.PORT) || 3000;

  app.listen(port, () => console.log(`Server running on ${port} port`));
};

export default startServer;
