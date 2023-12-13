// lib/db.js
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

let cachedConnection = null;

export async function connectToDatabase() {
  if (cachedConnection) {
    return cachedConnection;
  }

  const dbConnection = await mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  cachedConnection = dbConnection;
  return dbConnection;
}
