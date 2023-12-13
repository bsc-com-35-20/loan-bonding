// models/loanApplication.js
import mongoose from 'mongoose';

const LoanApplicationSchema = new mongoose.Schema({
  personalInformation: {
    firstName: String,
    lastName: String,
    // Add other personal information fields here
  },
  bankDetails: {
    accountName: String,
    accountNumber: String,
  },
});

const LoanApplication = mongoose.model('LoanApplication', LoanApplicationSchema);

export default LoanApplication;
