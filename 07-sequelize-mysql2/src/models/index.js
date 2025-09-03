import { Sequelize } from 'sequelize';
import configJson from '../config/config.json' assert { type: 'json' };

const env = process.env.NODE_ENV || 'development';
const cfg = configJson[env];

export const sequelize = new Sequelize(
  cfg.database,
  cfg.username,
  cfg.password,
  {
    host: cfg.host,
    dialect: cfg.dialect,
  }
);

export { default as App } from './App.js';
