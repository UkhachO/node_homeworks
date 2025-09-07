import 'dotenv/config';
import app from './index.js';
import sequelize from './config/db.js';

const PORT = Number(process.env.PORT) || 3000;

(async () => {
  try {
    await sequelize.authenticate();
    console.log('DB connection: OK');
    app.listen(PORT, () =>
      console.log(`Server listening on http://localhost:${PORT}`)
    );
  } catch (err) {
    console.error('DB connection error:', err.message);
    process.exit(1);
  }
})();
