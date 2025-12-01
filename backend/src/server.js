import dotenv from 'dotenv';
import { buildApp } from './app.js';
import { connectToDatabase } from './config/db.js';

dotenv.config();

const port = process.env.PORT || 4000;
const mongoUri = process.env.MONGO_URI;

async function start() {
  try {
    await connectToDatabase(mongoUri);
    const app = buildApp();
    app.listen(port, () => {
      console.log(`API listening on port ${port}`);
    });
  } catch (error) {
    console.error('Failed to start server', error);
    process.exit(1);
  }
}

start();
