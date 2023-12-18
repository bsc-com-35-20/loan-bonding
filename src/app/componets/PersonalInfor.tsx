'use client'
import { useForm } from 'react-hook-form';
import { useFormState } from './FormContext';
import './form.css';
import { postPersonalInformation } from '../actions/users/personal-info';

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
  const { onHandleNext } = useFormState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormValues>();

  async function onHandleFormSubmit(data: TFormValues, ) {
    console.log('Form submitted with data:', data);
    console.log(data);


    try {
      // Call the function to post personal information
      await postPersonalInformation(
        data.surname,
        data.firstname,
        data.othername,
        data.dateofbirth,
        data.sex,
        data.home,
        data.phonenumber
      );

      onHandleNext();
    } catch (error) {
      // Handle errors, e.g., display an error message to the user
      console.error('Error submitting form:', error);
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
          placeholder="Other Name"
          className={`h-10 px-4 border rounded-md ${
            errors.othername ? 'border-red-500' : ''
          }`}
          {...register('othername', { required: 'Other Name is required' })}
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
        <input
          id="sex"
          type="text"
          placeholder="Sex"
          className={`h-10 px-4 border rounded-md ${
            errors.sex ? 'border-red-500' : ''
          }`}
          {...register('sex', { required: 'Sex is required' })}
        />
        {errors.sex && <p className="text-red-500">{errors.sex.message}</p>}
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
          type="text"
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
