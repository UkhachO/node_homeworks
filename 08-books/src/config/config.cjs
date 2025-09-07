require('dotenv').config();

const {
  DB_HOST = 'db',
  DB_NAME = 'books_db',
  DB_USER = 'root',
  DB_PASS = 'password',
  DB_DIALECT = 'mysql',
  DB_LOGGING = 'false',
} = process.env;

const base = {
  username: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  host: DB_HOST,
  dialect: DB_DIALECT,
  logging: DB_LOGGING === 'true',
};

module.exports = {
  development: base,
  test: { ...base, database: `${DB_NAME}_test` },
  production: { ...base, database: `${DB_NAME}_prod` },
};
