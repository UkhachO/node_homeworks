import 'dotenv/config'; 
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: process.env.DATABASE_DIALECT, 
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT || 5432),
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  logging: false,
});

export default sequelize;
