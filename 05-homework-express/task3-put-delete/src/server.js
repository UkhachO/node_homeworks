import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import methodsRoute from './routes/methods.route.js';

const startServer = () => {
  const app = express();

  app.use(cors());

  app.use(express.json());

  app.use('/method', methodsRoute);

  const port = Number(process.env.PORT) || 3000;

  app.listen(port, () => console.log(`Server running on ${port} port`));
};

export default startServer;
