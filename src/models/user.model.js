import { DataTypes } from 'sequelize';
import { sequelize } from '../database/config.js';
import { repair } from './repair.model.js';

export const user = sequelize.define('users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM,
    values: ['client', 'employee'],
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM,
    values: ['available', 'cancelled'],
    allowNull: false,
    defaultValue: 'available',
  },
});

user.hasMany(repair, {
  foreignKey: 'userId',
  sourceKey: 'id',
});

repair.belongsTo(user, {
  foreignKey: 'userId',
  targetId: 'id',
});
