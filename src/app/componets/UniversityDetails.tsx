import { useForm } from 'react-hook-form';
import { useFormState } from './FormContext';
import './form.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { checkAuthentication } from '../actions/users/checkUser';
import { postUniversityDetails } from '../actions/users/universityDetails';


type TFormValues = {
  programofstudy: string;
  academicyear: string;
  yearofstudy: string;
};

export function UniversityDetails() {
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
      const result = await postUniversityDetails(
        data.programofstudy,
        data.academicyear,
        data.yearofstudy
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
        Student's University/College Details
      </h1>

      <div className="flex flex-col gap-1">
        <label htmlFor="programofstudy">Program Of Study</label>
        <input
          id="programofstudy"
          type="text"
          placeholder="Program of Study"
          className={`h-11 px-4 border rounded-md ${
            errors.programofstudy ? 'border-red-500' : ''
          }`}
          {...register('programofstudy', {
            required: 'Program of Study is required',
          })}
        />
        {errors.programofstudy && (
          <p className="text-red-500">{errors.programofstudy.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="academicyear">Academic Year</label>
        <input
          id="academicyear"
          type="number"
          placeholder="Academic Year"
          className={`h-11 px-4 border rounded-md ${
            errors.academicyear ? 'border-red-500' : ''
          }`}
          {...register('academicyear', {
            required: 'Academic Year is required',
          })}
        />
        {errors.academicyear && (
          <p className="text-red-500">{errors.academicyear.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="yearofstudy">Year Of Study</label>
        <input
          id="yearofstudy"
          type="number"
          placeholder="Year Of Study"
          className={`h-11 px-4 border rounded-md ${
            errors.yearofstudy ? 'border-red-500' : ''
          }`}
          {...register('yearofstudy', {
            required: 'Year Of Study is required',
          })}
        />
        {errors.yearofstudy && (
          <p className="text-red-500">{errors.yearofstudy.message}</p>
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
