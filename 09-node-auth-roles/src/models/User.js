import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const User = sequelize.define('user', {
  fullName: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  mustChangePassword: { type: DataTypes.BOOLEAN, defaultValue: false },
  role: { type: DataTypes.ENUM('user', 'admin'), defaultValue: 'user' },
});

export default User;
