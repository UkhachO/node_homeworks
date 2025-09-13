import 'dotenv/config';
import sequelize from './config/db.js';
import app from './server.js';

const start = async () => {
  try {
    await sequelize.sync();
    console.log('Database connected');
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`Server started on ${port}`));
  } catch (err) {
    console.error('Error:', err);
  }
};

start();
