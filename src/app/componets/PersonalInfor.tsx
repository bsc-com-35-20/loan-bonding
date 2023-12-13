"use client"
import { useForm } from "react-hook-form"
import { useFormState } from "./FormContext";
import './form.css';

type TFormValues = {
   surname:string;
   firstname:string;
   othername:string;
   dateofbirth:string;
   sex:string;
   home:string;
   phonenumber:string;
};
export function PersonalInfor(){
    const { onHandleNext } = useFormState();

    const { register,handleSubmit} = useForm<TFormValues>();
    
    function onHandleFormSubmit(data:TFormValues){
      console.log(data);
        onHandleNext();
    }

    return <form className="space-y-4 textdd w-full"  onSubmit={handleSubmit(onHandleFormSubmit)}>
      <h1 className='text-xl font-semibold text-center'>Personal Information</h1>
        <div className="flex flex-col  gap-1">

        <label htmlFor="surname" >Surname</label>
        <input
         id="surname"
         type="text"
         placeholder="surname"
         className="h-10 px-4 border rounded-md"
         {...register("surname")}
          />

        </div>
        <div className="flex flex-col gap-1">

        <label htmlFor="firstname" >First Name</label>
        <input
         id="firstname"
         type="text"
         placeholder="First Name"
         className="h-10  px-4 border rounded-md"
         {...register("firstname")}
          />
         
         </div>
        <div className="flex flex-col gap-1">

        
        <label htmlFor="othername" >Other name</label>
        <input
         id="othername"
         type="text"
         placeholder="Other Name"
         className="h-10  px-4 border rounded-md"
         {...register("othername")}
          />

        </div>
        <div className="flex flex-col gap-1">

        
        <label htmlFor="dateofbirth" >Date Of Birth</label>
        <input
         id="dateofbirth"
         type="date"
         placeholder="Date Of Birth"
         className="h-10  px-4 border rounded-md"
         {...register("dateofbirth")}
          />

        </div>
        <div className="flex flex-col gap-1">

        
        <label htmlFor="sex" >Sex</label>
        <input
         id="sex"
         type="text"
         placeholder="Sex"
         className="h-10  px-4 border rounded-md"
         {...register("sex")}
          />

        </div>
        <div className="flex flex-col gap-1">

        
        <label htmlFor="home" >Home village/Traditional Authority/District</label>
        <input
         id="home"
         type="text"
         placeholder="Home village/Traditional Authority/District"
         className="h-10  px-4 border rounded-md"
         {...register("home")}
          />

<div className="flex flex-col gap-2">

        
<label htmlFor="phonenumber">Phone Number</label>
<input
 id="phonenumber"
 type="text"
 placeholder="Phone Number"
 className="h-10  px-4 border rounded-md"
 {...register("phonenumber")}
  />

</div>

        </div>
        <div className="flex justify-end">
         <button className="h-11 px-6 bg-amber-600 text-white rounded-md">Next</button>
        </div>
    </form>
}