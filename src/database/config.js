import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
  'reparacion-motocicletas',
  'postgres',
  'postgres',
  {
    host: 'localhost',
    dialect: 'postgres',
  }
);
