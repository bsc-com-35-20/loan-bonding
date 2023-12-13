// pages/index.js
import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    // Add other personal information fields here
    accountName: '',
    accountNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Assuming your API route is /api/loanApplication
      const response = await axios.post('/api/loanApplication', formData);
      console.log('Loan application submitted:', response.data);
    } catch (error) {
      console.error('Error submitting loan application:', error);
    }
  };

  return (
    <div>
      <h1>Loan Application Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        {/* Add other personal information fields here */}

        <h2>Bank Details</h2>
        <div>
          <label htmlFor="accountName">Account Name:</label>
          <input
            type="text"
            id="accountName"
            name="accountName"
            value={formData.accountName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="accountNumber">Account Number:</label>
          <input
            type="text"
            id="accountNumber"
            name="accountNumber"
            value={formData.accountNumber}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
}
