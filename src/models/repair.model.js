import { sequelize } from '../database/config.js';
import { DataTypes } from 'sequelize';

export const repair = sequelize.define('repairs', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM,
    values: ['pending', 'cancelled', 'completed'],
    defaultValue: 'pending',
    allowNull: false,
  },
});
