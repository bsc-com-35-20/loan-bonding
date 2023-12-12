"use client";

import { useForm } from "react-hook-form"
import { useFormState } from "./FormContext";

type TFormValues = {
   universityname:string;
   regno:string;
   programofstudy:string;
   academicyear:string;
   yearofstudy:string;
};
export function UniversityDetails(){

  const {onHandleBack,onHandleNext} = useFormState();

    const { register,handleSubmit} = useForm<TFormValues>();
    
    function onHandleFormSubmit(data:TFormValues){
        onHandleBack();
        onHandleNext();
    }

    return <form className="space-y-6 text-16" onSubmit={handleSubmit(onHandleFormSubmit)}>
      <h1 className='text-xl font-semibold text-center'>Student's University/College Details</h1>

      <div className="flex flex-col gap-1">

        <label htmlFor="universityname" >Name of College/University</label>
        <input
         id="universityname"
         type="text"
         autoComplete=" "
         placeholder="Name Of College/University"
         className="h-11 px-4 border rounded-md"
         {...register("universityname")}
          />
         
        </div>
      
        <div className="flex flex-col gap-1">

        <label htmlFor="programofstudy" >Program Of Study</label>
        <input
         id="programofstudy"
         type="text"
         placeholder="Program of Study"
         className="h-11 px-4 border rounded-md"
         {...register("programofstudy")}
          />
         
        </div>
        <div className="flex flex-col gap-1">

        <label htmlFor="regno" >Student Regstration Number</label>
        <input
         id="regno"
         type="text"
         placeholder="Student Registration Number"
         className="h-11  px-4 border rounded-md"
         {...register("regno")}
          />
         
         </div>
        <div className="flex flex-col gap-1">

        
        <label htmlFor="academicyear" >Academic Year </label>
        <input
         id="academicyear"
         type="text"
         placeholder="Academic Year"
         className="h-11  px-4 border rounded-md"
         {...register("academicyear")}
          />

        </div>

        <div className="flex flex-col gap-1">

        
<label htmlFor="yearofstudy" >Year Of Study</label>
<input
 id="yearofstudy"
 type="text"
 placeholder="Year Of Study"
 className="h-11  px-4 border rounded-md"
 {...register("yearofstudy")}
  />

</div>

        <div className="flex justify-end gap-4">
         <button 
         type="button" 
         onClick={onHandleBack}
         className="h-11 px-6 bg-amber-600 text-white rounded-md">Back</button>
         <button
         className="h-11 px-6 bg-amber-600 text-white rounded-md">Next</button>
        </div>
    </form>
}