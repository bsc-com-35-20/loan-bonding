// pages/api/loanApplication.js
import { connectToDatabase } from '../../lib/db';
import LoanApplication from '../../models/loanApplication';

export default async function handler(req, res) {
  const { method } = req;

  await connectToDatabase();

  switch (method) {
    case 'GET':
      try {
        const loanApplications = await LoanApplication.find({});
        res.status(200).json({ success: true, data: loanApplications });
      } catch (error) {
        res.status(500).json({ success: false, error: error.message });
      }
      break;

    case 'POST':
      try {
        const loanApplication = await LoanApplication.create(req.body);
        res.status(201).json({ success: true, data: loanApplication });
      } catch (error) {
        res.status(500).json({ success: false, error: error.message });
      }
      break;

    // Add 'PUT' and 'DELETE' cases as needed

    default:
      res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
