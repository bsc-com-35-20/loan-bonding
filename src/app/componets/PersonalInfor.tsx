'use client'
import { useForm } from 'react-hook-form';
import { useFormState } from './FormContext';
import './form.css';
import { postPersonalInformation } from '../actions/users/personal-info';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { checkAuthentication } from '../actions/users/checkUser';

type TFormValues = {
  surname: string;
  firstname: string;
  othername: string;
  dateofbirth: string;
  sex: string;
  home: string;
  phonenumber: string;
};

export function PersonalInfor() {
  const router = useRouter();
  const [message, setMessage] = useState('');
  const { onHandleNext } = useFormState();
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
  async function onHandleFormSubmit(data: TFormValues, ) {

  
    setMessage('Submitting form...');
    try {
      const result = await postPersonalInformation(
        data.surname,
        data.firstname,
        data.othername,
        data.dateofbirth,
        data.sex,
        data.home,
        data.phonenumber
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
        Personal Information
      </h1>
      <div className="flex flex-col gap-1">
        <label htmlFor="surname">Surname</label>
        <input
          id="surname"
          type="text"
          placeholder="Surname"
          className={`h-10 px-4 border rounded-md ${
            errors.surname ? 'border-red-500' : ''
          }`}
          {...register('surname', { required: 'Surname is required' })}
        />
        {errors.surname && (
          <p className="text-red-500">{errors.surname.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="firstname">First Name</label>
        <input
          id="firstname"
          type="text"
          placeholder="First Name"
          className={`h-10 px-4 border rounded-md ${
            errors.firstname ? 'border-red-500' : ''
          }`}
          {...register('firstname', { required: 'First Name is required' })}
        />
        {errors.firstname && (
          <p className="text-red-500">{errors.firstname.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="othername">Other name</label>
        <input
          id="othername"
          type="text"
          placeholder="Other Name (Optional)"
          className={`h-10 px-4 border rounded-md ${
            errors.othername ? 'border-red-500' : ''
          }`}
          {...register('othername')}
        />
        {errors.othername && (
          <p className="text-red-500">{errors.othername.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="dateofbirth">Date Of Birth</label>
        <input
          id="dateofbirth"
          type="date"
          placeholder="Date Of Birth"
          className={`h-10 px-4 border rounded-md ${
            errors.dateofbirth ? 'border-red-500' : ''
          }`}
          {...register('dateofbirth', {
            required: 'Date Of Birth is required',
          })}
        />
        {errors.dateofbirth && (
          <p className="text-red-500">{errors.dateofbirth.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
      <label htmlFor="sex">Sex</label>
        <select className={`h-10 px-4 border rounded-md ${ errors.sex ? 'border-red-500': ''}`} 
        {...register('sex',{required:'Sex is required'})}>
        <option value="" disabled selected>Select Gender</option>
       <option value="male" >Male</option>
       <option value="Female">Female</option>
       
       
        </select>
        {errors.sex && <p className='text-red-500'>{errors.sex.message}</p>}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="home">
          Home village/Traditional Authority/District
        </label>
        <input
          id="home"
          type="text"
          placeholder="Home village/Traditional Authority/District"
          className={`h-10 px-4 border rounded-md ${
            errors.home ? 'border-red-500' : ''
          }`}
          {...register('home', {
            required: 'Home village/Traditional Authority/District is required',
          })}
        />
        {errors.home && (
          <p className="text-red-500">{errors.home.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="phonenumber">Phone Number</label>
        <input
          id="phonenumber"
          type="number"
          placeholder="Phone Number"
          className={`h-10 px-4 border rounded-md ${
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
