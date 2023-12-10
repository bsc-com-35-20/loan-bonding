// models/loanApplication.js
import mongoose from 'mongoose';

const { Schema } = mongoose;

const personalInformationSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  birthday: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
    required: true,
  },
  homeVillage: {
    type: String,
    trim: true,
  },
  traditionalAuthority: {
    type: String,
    trim: true,
  },
  district: {
    type: String,
    trim: true,
  },
  postalAddress: {
    type: String,
    trim: true,
  },
  phoneNumber: {
    type: String,
    validate: {
      validator: (value) => /^\d{10}$/i.test(value),
      message: 'Invalid phone number format',
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: (value) => /\S+@\S+\.\S+/.test(value),
      message: 'Invalid email format',
    },
  },
});

const bankDetailsSchema = new Schema({
  accountName: {
    type: String,
    required: true,
    trim: true,
  },
  accountNumber: {
    type: String,
    required: true,
    validate: {
      validator: (value) => /^\d{8,20}$/i.test(value),
      message: 'Invalid account number format',
    },
  },
});

const loanApplicationSchema = new Schema({
  personalInformation: {
    type: personalInformationSchema,
    required: true,
  },
  bankDetails: {
    type: bankDetailsSchema,
    required: true,
  },
  // Additional fields can be added here based on your requirements
});

const LoanApplication = mongoose.model('LoanApplication', loanApplicationSchema);

export default LoanApplication;
