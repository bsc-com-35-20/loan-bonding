'use client'
import { useForm } from 'react-hook-form';
import { useFormState } from './FormContext';
import './form.css';
import { postPersonalInformation } from '../actions/users/personal-info';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

type TFormValues = {
  name: string;
  address: string;
  home: string;
  phonenumber: string;
  occupation: string;
  };

export function GuardianDetails() {
  const router = useRouter();
  const [message, setMessage] = useState('');
  const { onHandleNext } = useFormState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormValues>();

  async function onHandleFormSubmit(data: TFormValues, ) {
    setMessage('Submitting form...');
    try {
      const result = await postPersonalInformation(
        data.name,
        data.address,
        data.home,
        data.phonenumber,
        data.occupation,
        data.home,
        data.occupation
      );
  
      if (result.success) {
        // Personal information created successfully
        setMessage(result.message);
    
        onHandleNext();
      } else {
        // Handle the case where an error occurred or user ID/email is not found
        setMessage(result.message);
                // Redirect to login if necessary
                if (
                  result.message === 'User ID not found in session' ||
                  result.message === 'User email not found in session'
                ) {
                  router.push('/auth/signin'); // Adjust the path as needed
                }
        
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("An unexpected error occurred");
    }
  }

  return (
    <form
      className="space-y-4 textdd w-full"
      onSubmit={handleSubmit(onHandleFormSubmit)}
    >
      <h1 className="text-xl font-semibold text-center">
        Guardian Details
      </h1>
      <div className="flex flex-col gap-1">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="name"
          className={`h-10 px-4 border rounded-md ${
            errors.name ? 'border-red-500' : ''
          }`}
          {...register('name', { required: 'name is required' })}
        />
        {errors.name && (
          <p className="text-red-500">{errors.name.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="address">Address</label>
        <input
          id="address"
          type="text"
          placeholder="Address"
          className={`h-10 px-4 border rounded-md ${
            errors.address ? 'border-red-500' : ''
          }`}
          {...register('address', { required: 'Address is required' })}
        />
        {errors.address && (
          <p className="text-red-500">{errors.address.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="home">Home</label>
        <input
          id="home"
          type="text"
          placeholder="Home village/Traditional Authority/District"
          className={`h-10 px-4 border rounded-md ${
            errors.home ? 'border-red-500' : ''
          }`}
          {...register('home', { required: 'Home is required' })}
        />
        {errors.home && (
          <p className="text-red-500">{errors.home.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="phonenumber">Phone Number</label>
        <input
          id="phonenumber"
          type="number"
          placeholder="Phone number"
          className={`h-10 px-4 border rounded-md ${
            errors.phonenumber ? 'border-red-500' : ''
          }`}
          {...register('phonenumber', {
            required: 'Please put valid phone number',
          })}
        />
        {errors.phonenumber && (
          <p className="text-red-500">{errors.phonenumber.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="occupation">Occupation</label>
        <input
          id="occupation"
          type="text"
          placeholder="Occupation"
          className={`h-10 px-4 border rounded-md ${
            errors.occupation ? 'border-red-500' : ''
          }`}
          {...register('occupation', { required: 'Occupation is required' })}
        />
        {errors.occupation && <p className="text-red-500">{errors.occupation.message}</p>}
      </div> 
      <p>{message}</p>
      <div className="flex justify-end">
      
        <button
          className="h-11 px-6 bg-amber-600 text-white rounded-md"
          type="submit"
        >
          Next
        </button>
      </div>
    </form>
  );
}
