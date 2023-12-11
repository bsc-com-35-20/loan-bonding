
'use client'

import { signIn } from 'next-auth/react';
import Image from 'next/image';
import logoImage from './images.jpg';
import './styleSignIn.css'; 
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const SignInForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e: { preventDefault: () => void; }) => {

    
    console.log('Email:', email);
    console.log('Password:', password);

    setEmail('');
    setPassword('');

    const signInResponse = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (signInResponse?.error) {
      
      console.error('Sign-in error:', signInResponse.error);
    } else {
      router.push('/Dashboard');
    }
  };
  const navigateToSignIn = () => {

    router.push('/auth/signup');
  };



  return (
    <section className='home'>
    <div className="container" id="container">
    <div className="form-container sign-in" id="sigNin">
      <form onSubmit={handleSignIn}>
        <div className="login-header">
          <Image src={logoImage} width={245} height={197} alt="Logo" />
          <h2>SFMIS - Login</h2>
        </div>
        <span>Use your email to sign in</span>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p>Don't have an account?</p><b className="hidden" onClick={navigateToSignIn}>
          create account
        </b>

        <button type="submit">Sign In</button>
        <div className="text-center">
          <p>© 2023 Higher Education Students' Grants & Loans Board</p>
        </div>
      </form>
    </div>
   {/*<div className='toggle-container'>
      <div className='toggle'/>
            <div className="toggle-panel toggle-right">
            <h1>Hello There!</h1>
            <p>Register with your personal details to use all site features</p>
            <button className="hidden" id="register">
              Sign Up
            </button>
          </div>
  </div>*/}
    </div>
    </section>
  );
};

export default SignInForm;
