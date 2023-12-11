// lib/db.js
import mongoose from 'mongoose';

const { MONGODB_URI, MONGODB_DB } = process.env;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

if (!MONGODB_DB) {
  throw new Error('Please define the MONGODB_DB environment variable inside .env.local');
}

let cachedConnection = null;

export async function connectToDatabase() {
  if (cachedConnection) {
    return cachedConnection;
  }

  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  const dbConnection = await mongoose.connect(MONGODB_URI, options);
  cachedConnection = dbConnection;
  return dbConnection;
}

export async function disconnectFromDatabase() {
  if (cachedConnection) {
    await mongoose.disconnect();
    cachedConnection = null;
  }
}
