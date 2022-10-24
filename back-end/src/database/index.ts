import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const mongoUri = process.env.MONGO_URI;

export default function connectToMongoDB() {
  if (mongoUri) {
    mongoose
      .connect(mongoUri, {})
      .then(() => console.log('Database connected!'))
      .catch(err => console.log(err));
  }
}
