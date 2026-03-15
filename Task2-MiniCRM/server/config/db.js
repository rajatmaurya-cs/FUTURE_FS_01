import mongoose from 'mongoose';

const globalForMongoose = globalThis;
const mongooseCache = globalForMongoose.__mongooseCache || (globalForMongoose.__mongooseCache = { conn: null, promise: null });

const connectDB = async () => {
  try {
    if (mongooseCache.conn) return mongooseCache.conn;

    const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/mini_crm';
    if (!mongooseCache.promise) {
      mongooseCache.promise = mongoose.connect(mongoUri);
    }

    const conn = await mongooseCache.promise;
    mongooseCache.conn = conn;

    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return conn;

  } catch (error) {
    mongooseCache.promise = null;
    console.error('MongoDB connection error:', error);
    throw error;
  }
};

export default connectDB;
