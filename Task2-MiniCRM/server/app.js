import express from 'express';

import dotenv from 'dotenv';
import connectDB from './config/db.js';

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware

app.use(express.json());

import authRoutes from './routes/authRoutes.js';
import leadRoutes from './routes/leadRoutes.js';
import dashboardRoutes from './routes/dashboardRoutes.js';

// Routes
console.log("app.js");
app.use('/api/auth', authRoutes);

app.use('/api/leads', leadRoutes);

app.use('/api/dashboard', dashboardRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

export default app;
