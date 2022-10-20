import { DataTypes } from 'sequelize';
import { db } from '../config/database.js';
import Characters from './Characters.js';

const ClassCharacters = db.define(
  'ClassCharacters',
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name_class_character: { type: DataTypes.STRING },
    description_class_character: { type: DataTypes.STRING },
    power: { type: DataTypes.INTEGER },
    life: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: 'Class_Character',
  }
);

export default ClassCharacters;

ClassCharacters.hasMany(Characters, {
  foreignKy: 'Class_Characters_id',
  targetId: 'id',
});

Characters.belongsTo(ClassCharacters, {
  foreignKy: 'Class_Characters_id',
  targetId: 'id',
});
