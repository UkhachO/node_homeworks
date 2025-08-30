import pool from './pg.js';

const connectDatabase = async () => {
  await pool.query('SELECT 1');
  console.log('Database connected (Render Postgres)');
};

export default connectDatabase;
