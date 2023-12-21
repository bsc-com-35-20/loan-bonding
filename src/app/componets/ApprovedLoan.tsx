import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useFormState } from './FormContext';
import { postApproveLoans } from '../actions/users/approvedLoan';
 // Adjust the path

type TFormValues = {
  bankname: string;
  branch: string;
  accountname: string;
  accountnumber: string;
};

export function ApprovedLoan() {
  const { onHandleBack } = useFormState();
  const { handleSubmit } = useForm<TFormValues>();
  const [loanType, setLoanType] = useState<string>(''); // State to store the selected loan type
  
  const [message, setMessage ] = useState('')

  const onHandleFormSubmit = async () => {
    setMessage("Submiting form...")
    // Ensure that a loan type is selected
    if (!loanType) {
      // Display an error message or handle it as needed
      console.error('Please select a loan type');
      return;
    }

    // Call the server function to approve loans
    const result = await postApproveLoans(loanType);

    if (result.success) {

      // Continue with navigation or other actions
      setMessage(result.message)
      onHandleBack();
    } else {
      // Handle error case
      setMessage(result.message)
      console.error('Error approving loans:', result.message);
      // You might want to display an error message to the user
    }
  };

  return (
    <form className="space-y-6 textdd" onSubmit={handleSubmit(onHandleFormSubmit)}>
      <h1 className="text-xl font-semibold text-center">Approved Loan</h1>

      {/* Select for loan type */}
      <select
        name="loanType"
        className="h-8 px-4 text-black bg-blue-800 rounded-m focus:text-white focus:bg-blue-800 hover:border-gray-400 cursor-pointer"
        value={loanType}
        onChange={(e) => setLoanType(e.target.value)}
      >
        <option value="" className='text-white bg-blue-800'>Select Loan Type</option>
        <option value="1" className='text-white bg-blue-800'>Fees Only</option>
        <option value="2" className='text-white bg-blue-800'>Upkeep Only</option>
        <option value="3" className='text-white bg-blue-800'>Both</option>
      </select>

      {/* Display loan amount in the input field */}
      {/* <input
        type="number"
        id="number-input"
        aria-describedby="helper-text-explanation"
        className="bg-gray-50 border-b border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Amount"
        value={loanAmount !== null ? loanAmount : ''}
        readOnly
      /> */}

      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={onHandleBack}
          className="h-11 px-6 bg-amber-600 text-white rounded-md"
        >
          Back
        </button>
        <button
          type="submit"
          className="h-11 px-6 bg-amber-600 text-white rounded-md"
        >
          Submit
        </button>
       
      </div>
      <p>{message}</p>
    </form>
  );
}
