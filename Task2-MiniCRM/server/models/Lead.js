import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const leadSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
    },
    source: {
      type: String,
      required: true,
    },
    message: {
      type: String,
    },
    status: {
      type: String,
      enum: ['New', 'Contacted', 'Qualified', 'Converted', 'Closed'],
      default: 'New',
    },
    notes: [noteSchema],
  },
  {
    timestamps: true,
  }
);

const Lead = mongoose.model('Lead', leadSchema);

export default Lead;
