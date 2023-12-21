"use client";

import { FormProvider } from "../componets/FormContext";
import { FormStep } from "../componets/FormStep";




export default function Home() {
  return <main className="page bg-cover bg-center bg-no-repeat ">
    <div className="flex items-center justify-between h-16 py-4 px-6">
    <img src="./images.jpeg" alt="Logo" className="h-8 w-8 mr-4" />
    
   <div className="flex justify-end items-center space-x-4">
  <a href="/home" className="text-blue-200 hover:bg-amber-700 hover:text-white font-semibold py-2 px-4 rounded-md">Home</a>
  <a href="" className="text-blue-200 hover:bg-amber-700 hover:text-white font-semibold py-2 px-4 rounded-md">About</a>
  <a href="/auth/signout" className="text-blue-200 hover:bg-amber-700 hover:text-white font-semibold py-2 px-4 rounded-md">Sign Out</a>
</div>
</div>
       
          <div className='flex justify-center items-center w-full min-h-screen p-6'>
          
          <div className='max-w-2xl w-full border p-6 round-md bg-white'>
            
          <FormProvider>
            <FormStep />
            </FormProvider>
          </div>

  </div>
  </main>
  
  
  
  
  }
