import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import Admin from './models/Admin.js';
import Lead from './models/Lead.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '.env') });

const mongoUri = process.env.MONGO_URI;

const seedDatabase = async () => {
  try {
    await mongoose.connect(mongoUri);
    console.log('MongoDB Connected for Seed');

    // Clear out
    await Admin.deleteMany();
    await Lead.deleteMany();

    // Create Admin
    const createdAdmin = await Admin.create({
      email: 'admin@demo.com',
      password: 'password123',
    });
    console.log('Admin created: admin@demo.com / password123');

    // Create sample leads
    
    await Lead.create([
      {
        fullName: 'Jane Doe',
        email: 'jane@example.com',
        phone: '123-456-7890',
        companyName: 'Tech Corp',
        source: 'Website Form',
        message: 'Interested in your services.',
        status: 'New',
        notes: [{ text: 'Initial signup.' }]
      },
      {
        fullName: 'John Smith',
        email: 'john@smith.org',
        phone: '098-765-4321',
        companyName: 'Smith Org',
        source: 'LinkedIn',
        message: 'Can we schedule a call?',
        status: 'Contacted',
        notes: [{ text: 'Reached out via LinkedIn.', createdAt: new Date(Date.now() - 86400000) }]
      },
      {
        fullName: 'Alice Johnson',
        email: 'alice@wonderland.com',
        phone: '111-222-3333',
        source: 'Referral',
        status: 'Converted',
        notes: [{ text: 'Closed the deal!' }]
      }
    ]);
    console.log('Sample leads seeded');

    await mongoose.disconnect();
    process.exit(0);
  } catch (err) {
    console.error(err);
    try {
      await mongoose.disconnect();
    } catch {
      // ignore
    }
    process.exit(1);
  }
};

seedDatabase();
