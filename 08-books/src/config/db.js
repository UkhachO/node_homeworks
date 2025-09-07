import 'dotenv/config';
import { Sequelize } from 'sequelize';

const {
  DB_HOST = 'db',
  DB_NAME = 'books_db',
  DB_USER = 'root',
  DB_PASS = 'password',
  DB_DIALECT = 'mysql',
  DB_LOGGING = 'false',
} = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: DB_DIALECT,
  logging: DB_LOGGING === 'true',
});

export default sequelize;
