import pool from '../db/pg.js';

export const list = async () => {
  const { rows } = await pool.query(
    'SELECT id, name, price FROM products ORDER BY id ASC'
  );
  return rows;
};

export const getById = async (id) => {
  if (!Number.isInteger(id) || id <= 0) return null;
  const { rows } = await pool.query(
    'SELECT id, name, price FROM products WHERE id = $1',
    [id]
  );
  return rows[0] || null;
};

export const create = async ({ name, price }) => {
  const { rows } = await pool.query(
    'INSERT INTO products (name, price) VALUES ($1, $2) RETURNING id, name, price',
    [name.trim(), Number(price)]
  );
  return rows[0];
};

export const update = async (id, payload) => {
  const current = await getById(id);
  if (!current) return null;

  const name = payload.name?.trim() ?? current.name;
  const price =
    payload.price !== undefined ? Number(payload.price) : current.price;

  const { rows } = await pool.query(
    'UPDATE products SET name = $1, price = $2 WHERE id = $3 RETURNING id, name, price',
    [name, price, id]
  );
  return rows[0] || null;
};

export const remove = async (id) => {
  const { rows } = await pool.query(
    'DELETE FROM products WHERE id = $1 RETURNING id',
    [id]
  );
  return Boolean(rows[0]);
};
