import jwt from 'jsonwebtoken';
import Admin from '../models/Admin.js';

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || 'secret123', {
    expiresIn: '30d',
  });
};


export const authAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });

    console.log("authadmin");

    console.log(`${admin}.  ${password}`);

    // Simple password check (no hashing)
    if (admin && admin.password === password) {
      res.json({
        _id: admin._id,
        email: admin.email,
        token: generateToken(admin._id),
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }

  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Create admin
export const setupAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const adminExists = await Admin.findOne({ email });

    if (adminExists) {
      return res.status(400).json({ message: 'Admin already exists' });
    }

    const admin = await Admin.create({
      email,
      password, // stored as plain text
    });

    if (admin) {
      res.status(201).json({
        _id: admin._id,
        email: admin.email,
        token: generateToken(admin._id),
      });
    } else {
      res.status(400).json({ message: 'Invalid admin data' });
    }

  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};