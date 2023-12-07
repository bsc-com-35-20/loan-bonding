
'use client';
import React, { FormEvent, useEffect, useState } from 'react';
import './style.css'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import logoImage from './images.jpg';


const SignUpForm = () => {
   const router = useRouter();
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  
        const handleSignUp = (e: FormEvent) => {
          e.preventDefault();
          
          
          console.log('Email:', email);
          console.log('Password:', password);

          
          setEmail('');
          setPassword('');

          router.push('/SignInForm');
        };

        const navigateToSignUp = () => {

          router.push('/PersonalInfo');
        };
        
  useEffect(() => {
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    //const createAcc = document.getElementById('register3');
    const loginBtn = document.getElementById('login');
    
    
    
    const handleRegisterClick = () => {
      if (container) {
        container.classList.add("active");
      }
    };

    const handleLoginClick = () => {
      if (container) {
        container.classList.remove("active");
      }
    };

    if (registerBtn && loginBtn  ) {
      registerBtn.addEventListener('click', handleRegisterClick);
      loginBtn.addEventListener('click', handleLoginClick);
      
      
    }

    return () => {
      if (registerBtn && loginBtn  ) {
        registerBtn.removeEventListener('click', handleRegisterClick);
        loginBtn.removeEventListener('click', handleLoginClick);
        
      }
    };
  }, []);

  return (
    <div className="container" id="container">
      <div className="form-container sign-up" id="sigNUp">
        <form onSubmit={handleSignUp}>
        <Image src={logoImage} width={200} height={150} alt="Logo" />
          <h1>Create an Account</h1>
          <span>Use your email for registration</span>
          <br/>
          <input type="text" placeholder="RegNo" />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" placeholder="Password"value={password} onChange={(e) => setPassword(e.target.value)} />
          <select id="uni" name="university">
            <option id="Unima">University Of Malawi</option>
            <option id="MUBAS">Malawi University of Business and Applied Sciences</option>
            <option id="Bunda">Lilongwe University of Agriculture and Natural Resources</option>
            <option id="mzuni">Mzuzu University </option>
            <option id="must">Malawi University of Science and Technology</option>
            <option id="com">College of medicine</option>
          </select>
          <br/>
          <b className="hidden" onClick={navigateToSignUp}>create account</b>
        </form>
      </div>
      {/*<div className='toggle-container'>
      <div className='toggle'/>
      <div className="toggle-panel toggle-left"/>
            <h1>Welcome back!!!</h1>
            <p>Enter your personal details to use all site features</p>
            <button className="hidden" id="login">
              Sign In
            </button>
           
  </div>*/}
    </div>
  );
};


export default SignUpForm;

