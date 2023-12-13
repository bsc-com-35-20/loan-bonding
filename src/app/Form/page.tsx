"use client";

import { useRouter } from 'next/navigation';
import { FormProvider } from "../componets/FormContext";
import { FormStep } from "../componets/FormStep";




export default function Home() {
 
  return <main >
          <div className='page bg-cover bg-center bg-no-repeat flex justify-center items-center' style={{ backgroundImage: "url('../image.jpg')" }}>
          <div className='max-w-2xl w-full border p-6 round-md bg-white'>
            
          <FormProvider>
            <FormStep />
            </FormProvider>
          </div>

  </div>
  </main>
  
  
  
  
  }
