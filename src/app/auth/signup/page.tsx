import SignUpForm from '@/app/componets/SignUpForm'
import React from 'react'

const SignUpPage = () => {
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-3x1'>
        Sign Up
      </h1>
      <SignUpForm />
    </div>
  )
}

export default SignUpPage