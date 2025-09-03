import { DataTypes } from 'sequelize';
import sequelize from '../db/sequelize.js';

export const App = sequelize.define(
  'App',
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    size: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    tableName: 'Apps',
    timestamps: false,
  }
);

export default App;
