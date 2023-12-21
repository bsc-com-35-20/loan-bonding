"use client";

import { useForm } from "react-hook-form"
import { useFormState } from "./FormContext";
import "./dropdown.css";

type TFormValues = {
   bankname:string;
   branch:string;
   accountname:string;
   accountnumber:string;
};
export function ApprovedLoan(){

  const {onHandleBack,onHandleNext} = useFormState();

    const { register,handleSubmit} = useForm<TFormValues>();
    
    function onHandleFormSubmit(data:TFormValues){
      console.log(data);
        onHandleBack();
        onHandleNext();
    }

    return <form className="space-y-6 textdd"  onSubmit={handleSubmit(onHandleFormSubmit)}>
      <h1 className='text-xl font-semibold text-center'>Approved Loan</h1>
       {/* <label htmlFor="dog-names" className="text-12">Select Approved Loan:</label>  */}
       <form className="max-w-sm mx-auto">
    
    <input type="number" id="number-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border-b border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Amount" required />
</form>
      

        <div className="flex justify-end gap-4">
         <button 
         type="button" 
         onClick={onHandleBack}
         className="h-11 px-6 bg-amber-600 text-white rounded-md">Back</button>
         <button 
         type="button"
         className="h-11 px-6 bg-amber-600 text-white rounded-md">Submit</button>
        </div>
    </form>
}