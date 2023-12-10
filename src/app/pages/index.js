// pages/index.js
import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    birthday: '',
    gender: '',
    homeVillage: '',
    traditionalAuthority: '',
    district: '',
    postalAddress: '',
    phoneNumber: '',
    email: '',
    accountName: '',
    accountNumber: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear validation error when the user types
  };

  const validateForm = () => {
    const newErrors = {};

    // Basic required field validation
    Object.keys(formData).forEach((field) => {
      if (!formData[field] && field !== 'email') {
        newErrors[field] = 'This field is required';
      }
    });

    // Email validation
    if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        // Assuming your API route is /api/loanApplication
        const response = await axios.post('/api/loanApplication', formData);
        console.log('Loan application submitted:', response.data);
      } catch (error) {
        console.error('Error submitting loan application:', error);
      }
    } else {
      console.log('Form has errors. Please fix them before submitting.');
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
          {errors.firstName && <span className="error">{errors.firstName}</span>}
        </div>
        {/* Repeat similar code for other personal information fields */}

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
          {errors.accountName && <span className="error">{errors.accountName}</span>}
        </div>
        {/* Repeat similar code for other bank details fields */}

        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
}
