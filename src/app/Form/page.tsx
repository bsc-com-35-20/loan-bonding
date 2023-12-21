"use client";

import { useRouter } from 'next/navigation';
import { FormProvider } from "../componets/FormContext";
import { FormStep } from "../componets/FormStep";




export default function Home() {
 
  return <main className='page bg-cover bg-center bg-no-repeat  w-full min-h-screen'>
    <div className="flex justify-end items-center space-x-4">
      <a href="/" className="text-blue-300 hover:bg-amber-400 hover:text-white font-semibold py-2 px-4 rounded-md">Home</a>
      <a href="" className="text-blue-300 hover:bg-amber-400 hover:text-white font-semibold py-2 px-4 rounded-md">About</a>
      <a href="/auth/signout" className="text-blue-300  hover:bg-amber-400 hover:text-white font-semibold py-2 px-4 rounded-md">Sign Out</a>
    </div>
          <div className=' flex justify-center items-center w-full min-h-screen p-6'>
          <div className='max-w-2xl w-full border p-6 round-md bg-white'>
            
          <FormProvider>
            <FormStep />
            </FormProvider>
          </div>

  </div>
  </main>
  }
