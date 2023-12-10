// pages/api/loanApplication.js
import dbConnect from '../../lib/db';
import LoanApplication from '../../models/loanApplication';

export default async function handler(req, res) {
  await dbConnect();

  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const loanApplications = await LoanApplication.find({});
        res.status(200).json({ success: true, data: loanApplications });
      } catch (error) {
        res.status(500).json({ success: false, error: 'Server Error' });
      }
      break;

    case 'POST':
      try {
        const loanApplication = await LoanApplication.create(req.body);
        res.status(201).json({ success: true, data: loanApplication });
      } catch (error) {
        res.status(400).json({ success: false, error: 'Invalid data provided' });
      }
      break;

    case 'PUT':
      try {
        const { id } = req.query;
        const loanApplication = await LoanApplication.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });

        if (!loanApplication) {
          return res.status(404).json({ success: false, error: 'Loan application not found' });
        }

        res.status(200).json({ success: true, data: loanApplication });
      } catch (error) {
        res.status(400).json({ success: false, error: 'Invalid data provided' });
      }
      break;

    case 'DELETE':
      try {
        const { id } = req.query;
        const deletedLoanApplication = await LoanApplication.findByIdAndDelete(id);

        if (!deletedLoanApplication) {
          return res.status(404).json({ success: false, error: 'Loan application not found' });
        }

        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(500).json({ success: false, error: 'Server Error' });
      }
      break;

    default:
      res.status(405).json({ success: false, error: 'Method not allowed' });
      break;
  }
}
