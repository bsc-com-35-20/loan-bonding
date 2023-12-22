"use client";

import { useForm } from "react-hook-form"
import { useFormState } from "./FormContext";
import "./dropdown.css";
import router, { useRouter } from "next/navigation";


type TFormValues = {
   bankname:string;
   branch:string;
   accountname:string;
   accountnumber:string;
};
export function ApprovedLoan(){

  const {onHandleBack,onHandleNext} = useFormState();

     const { register,handleSubmit} = useForm<TFormValues>();
    const router = useRouter();
     function onHandleFormSubmit(data:TFormValues){
     console.log(data);
         onHandleBack();
        onHandleNext();
   }
    const navigateToSuccess = () => {
   
      router.push('/componets/success');
    };

    return <form className="space-y-6 textdd"  >
      <h1 className='text-xl font-semibold text-center'>Approved Loan</h1>
       {/* <label htmlFor="dog-names" className="text-12">Select Approved Loan:</label>  */}
    <select name="dog-names" className="h-8 px-4 text-black bg-blue-500 rounded-m focus:text-white focus:bg-gray-200 hover:border-gray-400 cursor-pointer"> 
        <option value="Tuition">Tuition</option> 
        <option value="Upkeep">Upkeep</option> 
        <option value="Both">Both</option> 
        
    </select>
      

        <div className="flex justify-end gap-4">
         <button 
         type="button" 
         onClick={onHandleBack}
         className="h-11 px-6 bg-amber-600 text-white rounded-md">Back</button>
         <button 
         type="button"
         className="h-11 px-6 bg-amber-600 text-white rounded-md" onClick={navigateToSuccess}>Submit</button>
        </div>
    </form>
}