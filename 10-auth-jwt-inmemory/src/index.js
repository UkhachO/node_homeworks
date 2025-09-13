import 'dotenv/config';
import app from './server.js';
import { seedUsers } from './store/users.js';

const bootstrap = async () => {
  await seedUsers();
  const port = Number(process.env.PORT) || 3000;
  app.listen(port, () => console.log(`Server running on ${port}`));
};

bootstrap();
