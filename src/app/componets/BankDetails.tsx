"use client";

import { useForm } from "react-hook-form"
import { useFormState } from "./FormContext";
import './form.css';

type TFormValues = {
   bankname:string;
   branch:string;
   accountname:string;
   accountnumber:string;
};
export function BankDetails(){

  const {onHandleBack,onHandleNext} = useFormState();

    const { register,handleSubmit} = useForm<TFormValues>();
    
    function onHandleFormSubmit(data:TFormValues){
      console.log(data);
        onHandleBack();
        onHandleNext();
    }

    return <form className="space-y-6 textdd"  onSubmit={handleSubmit(onHandleFormSubmit)}>
      <h1 className='text-xl font-semibold text-center'>Bank Details</h1>
        <div className="flex flex-col gap-1">

        <label htmlFor="bankname" >Surname</label>
        <input
         id="bankname"
         type="text"
         placeholder="Bank Name"
         className="h-11 px-4 border rounded-md"
         {...register("bankname")}
          />
         
        </div>
        <div className="flex flex-col gap-1">

        <label htmlFor="branch" >Branch</label>
        <input
         id="branch"
         type="text"
         placeholder="Branch"
         className="h-11  px-4 border rounded-md"
         {...register("branch")}
          />
         
         </div>
        <div className="flex flex-col gap-1">

        
        <label htmlFor="accountname" >Bank Account Name</label>
        <input
         id="accountname"
         type="text"
         placeholder="Bank Account Name"
         className="h-11  px-4 border rounded-md"
         {...register("accountname")}
          />

        </div>

        <div className="flex flex-col gap-1">

        
<label htmlFor="accountnumber" >Account Number</label>
<input
 id="accountnumber"
 type="text"
 placeholder="Account Number"
 className="h-11  px-4 border rounded-md"
 {...register("accountnumber")}
  />

</div>

        <div className="flex justify-end gap-4">
         <button 
         type="button" 
         onClick={onHandleBack}
         className="h-11 px-6 bg-amber-600 text-white rounded-md">Back</button>
         <button 
         type="button"
         onClick={onHandleNext}
         className="h-11 px-6 bg-amber-600 text-white rounded-md">Next</button>
        </div>
    </form>
}