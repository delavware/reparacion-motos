import dotenv from 'dotenv';
dotenv.config();
import app from './app.js';
import { sequelize } from './database/config.js';

const PORT = process.env.PORT;

async function main() {
  try {
    await sequelize.sync({ force: false });
    app.listen(PORT);
    console.log(`listening on port ${PORT}`);
  } catch (error) {
    console.log('unable to connect' + error);
  }
}

main();
