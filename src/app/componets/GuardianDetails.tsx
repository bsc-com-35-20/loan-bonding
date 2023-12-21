'use client'
import { useForm } from 'react-hook-form';
import { useFormState } from './FormContext';
import './form.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { checkAuthentication } from '../actions/users/checkUser';
import { postGuardianDetails } from '../actions/users/guardianDetails';


type TFormValues = {
  name: string;
  Address: string;
  home: string;
  phonenumber: string;
  occupation: string;
};

export function GuardianDetails() {
  const router = useRouter();
  const [message, setMessage] = useState('');
  const { onHandleBack, onHandleNext } = useFormState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormValues>();

  useEffect(() => {
    checkAuthentication().then((status) => {
      if (status === false) {
        router.push('/auth/signin');
      }
    });
  }, [router]);

  async function onHandleFormSubmit(data: TFormValues) {
    setMessage('Submitting form...');
    try {
      const result = await postGuardianDetails(
        data.name,
        data.Address,
        data.home,
        data.phonenumber,
        data.occupation
      );

      if (result.success) {
        setMessage(result.message);
        onHandleNext();
      } else {
        setMessage(result.message);
        if (
          result.message === 'User ID not found in session' ||
          result.message === 'User email not found in session'
        ) {
          router.push('/auth/signin');
        }
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage('An unexpected error occurred');
    }
  }

  return (
    <form
      className="space-y-6 textdd"
      onSubmit={handleSubmit(onHandleFormSubmit)}
    >
      <h1 className="text-xl font-semibold text-center">
        Parents/Guardian Personal Details
      </h1>

      <div className="flex flex-col gap-1">
        <label htmlFor="name">Guardian/Parent Full Name</label>
        <input
          id="name"
          type="text"
          autoComplete=" "
          placeholder="Guardian/Parent Full Name"
          className={`h-11 px-4 border rounded-md ${
            errors.name ? 'border-red-500' : ''
          }`}
          {...register('name', { required: 'Full Name is required' })}
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="Address">Address</label>
        <input
          id="Address"
          type="text"
          placeholder="Postal Address"
          className={`h-11 px-4 border rounded-md ${
            errors.Address ? 'border-red-500' : ''
          }`}
          {...register('Address', { required: 'Address is required' })}
        />
        {errors.Address && (
          <p className="text-red-500">{errors.Address.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="home">Home/Traditional Authority/District</label>
        <input
          id="home"
          type="text"
          placeholder="Home/Traditional Authority/District"
          className={`h-11 px-4 border rounded-md ${
            errors.home ? 'border-red-500' : ''
          }`}
          {...register('home', { required: 'Home is required' })}
        />
        {errors.home && <p className="text-red-500">{errors.home.message}</p>}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="phonenumber">Phone Number</label>
        <input
          id="phonenumber"
          type="text"
          placeholder="Phone Number"
          className={`h-11 px-4 border rounded-md ${
            errors.phonenumber ? 'border-red-500' : ''
          }`}
          {...register('phonenumber', {
            required: 'Phone Number is required',
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
          className={`h-11 px-4 border rounded-md ${
            errors.occupation ? 'border-red-500' : ''
          }`}
          {...register('occupation', { required: 'Occupation is required' })}
        />
        {errors.occupation && (
          <p className="text-red-500">{errors.occupation.message}</p>
        )}
      </div>

      <p>{message}</p>

      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={onHandleBack}
          className="h-11 px-6 bg-amber-600 text-white rounded-md"
        >
          Back
        </button>
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
