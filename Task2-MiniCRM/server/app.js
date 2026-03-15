import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

// Load env vars
dotenv.config();

// Connect to database
await connectDB();

const app = express();

app.use(cors());

// Middleware

app.use(express.json());

import authRoutes from './routes/authRoutes.js';
import leadRoutes from './routes/leadRoutes.js';
import dashboardRoutes from './routes/dashboardRoutes.js';

// Routes

app.use('/api/auth', authRoutes);

app.use('/api/leads', leadRoutes);

app.use('/api/dashboard', dashboardRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.get('/api/health', (req, res) => {
  res.json({
    ok: true,
    mongo: {
      readyState: mongoose.connection.readyState,
      host: mongoose.connection.host || null,
      name: mongoose.connection.name || null,
    },
    env: {
      hasMongoUri: Boolean(process.env.MONGO_URI),
    },
  });
});

export default app;
