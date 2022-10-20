import app from './app.js';
import { db } from './config/database.js';

async function main() {
  try {
    await db.sync({ force: false });
    console.log('conexión establecida');
    app.listen(3000);
    console.log('conectado');
  } catch (error) {
    console.log(`unable to connect to the database: ${error}`);
  }
}

main();
