"use client";

import { useForm } from "react-hook-form"
import { useFormState } from "./FormContext";
import './form.css';

type TFormValues = {
    name:string;
   Address:string;
   home:string;
   phonenumber:string;
   occupation:string;
};
export function GuardianDetails(){

  const {onHandleBack,onHandleNext} = useFormState();

    const { register,handleSubmit} = useForm<TFormValues>();
    
    function onHandleFormSubmit(data:TFormValues){
        onHandleBack();
        onHandleNext();
    }

    return <form className="space-y-6 textdd" onSubmit={handleSubmit(onHandleFormSubmit)}>
      <h1 className='text-xl font-semibold text-center'>Parents/Guardian Personal Details</h1>

      <div className="flex flex-col gap-1">

        <label htmlFor="name" >Guardian/Parent Full Name</label>
        <input
         id="name"
         type="text"
         autoComplete=" "
         placeholder="Guardian/Parent Full Name"
         className="h-11 px-4 border rounded-md"
         {...register("name", { required: 'Surname is required' })}
          />
         
        </div>
      
        <div className="flex flex-col gap-1">

        <label htmlFor="Address" >Address</label>
        <input
         id="Address"
         type="text"
         placeholder="Postal Address"
         className="h-11 px-4 border rounded-md"
         {...register("Address")}
          />
         
        </div>
        <div className="flex flex-col gap-1">

        <label htmlFor="home" >Home/Traditional Authority/District</label>
        <input
         id="home"
         type="text"
         placeholder="Home/Traditional Authority/District"
         className="h-11  px-4 border rounded-md"
         {...register("home")}
          />
         
         </div>
        <div className="flex flex-col gap-1">

        
        <label htmlFor="phonenumber" >Phone Number</label>
        <input
         id="phonenumber"
         type="text"
         placeholder="Phone Number"
         className="h-11  px-4 border rounded-md"
         {...register("phonenumber")}
          />

        </div>

        <div className="flex flex-col gap-1">

        
<label htmlFor="occupation" >Occupation</label>
<input
 id="occupation"
 type="text"
 placeholder="Occupation"
 className="h-11  px-4 border rounded-md"
 {...register("occupation")}
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