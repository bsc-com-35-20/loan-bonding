
'use client';
import React, { useEffect, useState } from 'react';
import './style.css'
import logoImage from './images.jpg';
import Image from 'next/image';


const SignUpForm = () => {
 
    const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
    
        const [message, setMessage] = useState('');
        const [name, setName] =useState('');
    
    
        // const handleSubmit = async () => {
        //     setMessage("Signing up...");
        //     const message = await signUp(name,email, password);
        //     setMessage(message); }

  useEffect(() => {
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const createAcc = document.getElementById('register3');
    const loginBtn = document.getElementById('login');
    const loginBt = document.getElementById('login1');
    
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

    if (registerBtn && loginBtn && createAcc && loginBt) {
      registerBtn.addEventListener('click', handleRegisterClick);
      loginBtn.addEventListener('click', handleLoginClick);
      createAcc.addEventListener('click', handleRegisterClick);
      loginBt.addEventListener('click', handleLoginClick);
    }

    return () => {
      if (registerBtn && loginBtn && createAcc && loginBt) {
        registerBtn.removeEventListener('click', handleRegisterClick);
        loginBtn.removeEventListener('click', handleLoginClick);
        createAcc.removeEventListener('click', handleRegisterClick);
        loginBt.removeEventListener('click', handleLoginClick);
      }
    };
  }, []);

     
  return (
    <div className="container" id="container">
      <div className="form-container sign-up" id="sigNUp">
        <form>
          <h1>Create an Account</h1>
          <span>Use your email for registration</span>
          <input type="text" placeholder="Name"  value={name} onChange={(e) => setName(e.target.value) }/>
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

          <button className="button" id="login1">Create account</button>

          <button className="hidden" id="register " >Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in" id="sigNin">
        <form>
          <div className="login-header">
          <Image src={logoImage} width={245} height={197} alt="Logo"/>
            <h2>SFMIS - Login</h2>
          </div>
          <span>Use your email password</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <b className="hidden" id="register3">create account</b>
          <button>Sign In</button>
          <div className="text-center">
            <p>© 2023 Higher Education Students' Grants & Loans Board</p>
          </div>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome back!!!</h1>
            <p>Enter your personal details to use all site features</p>
            <button className="hidden" id="login">
              Sign In
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello Friend!!!</h1>
            <p>Register with your personal details to use all site features</p>
            <button className="hidden" id="register">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
    );
};


export default SignUpForm;

