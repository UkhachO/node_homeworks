import pool from './db/pg.js';

const setup = async () => {
  try {
    console.log('Running DB setup…');

    await pool.query(`
      CREATE TABLE IF NOT EXISTS products (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        price NUMERIC(10,2) NOT NULL
      );
    `);

    console.log("Table 'products' is ready (Render Postgres).");
  } catch (e) {
    console.error('Setup error:', e);
    process.exitCode = 1;
  } finally {
    if (typeof pool.end === 'function') {
      await pool.end().catch(() => {});
    }
    process.exit();
  }
};

setup();
