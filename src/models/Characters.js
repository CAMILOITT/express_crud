import { DataTypes } from 'sequelize';
import { db } from '../config/database.js';

const Characters = db.define(
  'Characters',
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name_character: { type: DataTypes.STRING },
    description_character: { type: DataTypes.STRING },
    money: { type: DataTypes.INTEGER },
  },
  {
    tableName: 'Character',
  }
);

export default Characters;
