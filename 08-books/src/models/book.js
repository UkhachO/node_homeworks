import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.js';

class Book extends Model {}

Book.init(
  {
    title: { type: DataTypes.STRING(255), allowNull: false },
    author: { type: DataTypes.STRING(255), allowNull: false },
    year: { type: DataTypes.INTEGER, allowNull: false, validate: { min: 0 } },
  },
  {
    sequelize,
    modelName: 'Book',
    tableName: 'Books',
    timestamps: true,
  }
);

export default Book;
