import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useFormState } from './FormContext';

type TFormValues = {
  surname: string;
  firstname: string;
  othername: string;
  dateofbirth: string;
  sex: string;
  home: string;
  phonenumber: string;
  email: string;
};

export function PersonalInfo() {
  const { onHandleNext } = useFormState();
  const { register, handleSubmit } = useForm<TFormValues>();
  const [error, setError] = useState<boolean>(false);

  const onHandleFormSubmit = (data: TFormValues) => {
    console.log(data);

    if (isFormValid(data)) {
      // If all required fields are filled and valid, proceed to the next step
      onHandleNext();
    } else {
      // If any required field is missing or invalid, show an error message
      setError(true);
    }
  };

  const isFormValid = (data: TFormValues) => {
    return (
      data.surname &&
      data.firstname &&
      isValidDate(data.dateofbirth) &&
      data.sex &&
      data.home &&
      data.phonenumber &&
      isValidEmail(data.email)
    );
  };

  const isValidDate = (dateString: string) => {
    // You may want to use a library like 'date-fns' or 'moment' for more advanced date validation
    return /^\d{4}-\d{2}-\d{2}$/.test(dateString);
  };

  const isValidEmail = (email: string) => {
    // Simple email validation regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <form className="space-y-6 text-16" onSubmit={handleSubmit(onHandleFormSubmit)}>
      <h1 className="text-xl font-semibold text-center">Personal Information</h1>

      <div className="flex flex-col gap-1">
        <label htmlFor="surname">Surname</label>
        <input
          id="surname"
          type="text"
          placeholder="Surname"
          className="h-11 px-4 border rounded-md"
          {...register('surname')}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="firstname">First Name</label>
        <input
          id="firstname"
          type="text"
          placeholder="First Name"
          className="h-11  px-4 border rounded-md"
          {...register('firstname')}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="dateofbirth">Date Of Birth</label>
        <input
          id="dateofbirth"
          type="date"
          placeholder="Date Of Birth"
          className="h-11  px-4 border rounded-md"
          {...register('dateofbirth')}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="sex">Sex</label>
        <input
          id="sex"
          type="text"
          placeholder="Sex"
          className="h-11  px-4 border rounded-md"
          {...register('sex')}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="phonenumber">Phone Number</label>
        <input
          id="phonenumber"
          type="text"
          placeholder="Phone Number"
          className="h-11  px-4 border rounded-md"
          {...register('phonenumber')}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="home">Home Village/Traditional Authority/District</label>
        <input
          id="home"
          type="text"
          placeholder="Home Village/Traditional Authority/District"
          className="h-11  px-4 border rounded-md"
          {...register('home')}
        />
      </div>

      <div className="flex justify-end">
        {error && <div style={{ color: 'red' }}>Please enter all required and valid information.</div>}
        <button className="h-11 px-6 bg-amber-600 text-white rounded-md">Next</button>
      </div>
    </form>
  );
}

export default PersonalInfo;
