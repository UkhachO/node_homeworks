import pg from 'pg';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
const { Pool } = pg;

const __dirname = dirname(fileURLToPath(import.meta.url));

dotenv.config({ path: resolve(__dirname, '../../.env') });

console.log('[DEBUG] PG_HOST:', process.env.PG_HOST);
console.log('[DEBUG] PG_DATABASE:', process.env.PG_DATABASE);

const pool = new Pool({
  host: process.env.PG_HOST,
  port: Number(process.env.PG_PORT || 5432),
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  ssl:
    String(process.env.PG_SSL ?? 'true') === 'true'
      ? { rejectUnauthorized: false }
      : false,
});

export default pool;
