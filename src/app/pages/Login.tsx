// LogIn.tsx
import React from 'react';
import Head from 'next/head';

const LogIn = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>Login Sample</title>
      </Head>
      <div className="form-container sign-up bg-white p-8 shadow-md rounded-md">
        <form className="flex flex-col items-center">
          <h1 className="text-2xl font-semibold">Create Account</h1>
          <span className="text-sm">Use your email for registration</span>
          <input
            type="text"
            placeholder="Name"
            className="input-field"
          />
          <input
            type="email"
            placeholder="Email"
            className="input-field"
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
          />
          <select id="uni" name="university" className="input-field" title="Choose your university">
            <option value="Unima">University Of Malawi</option>
            {/* ... rest of your options */}
          </select>
          <button className="btn-primary">Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in bg-white p-8 shadow-md rounded-md">
        <form className="flex flex-col items-center">
          <div className="login-header">
            <img src="images.jpg" alt="Logo" className="logo-login" />
            <h2 className="text-2xl font-semibold">SFMIS - Login</h2>
          </div>
          <span className="text-sm">Use your email and password</span>
          <input
            type="email"
            placeholder="Email"
            className="input-field"
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
          />
          <a href="#" className="text-blue-500 text-sm">
            Forget your password?
          </a>
          <button className="btn-primary">Sign In</button>
          <div className="text-center mt-4">
            <p className="text-xs">
              © 2023 Higher Education Students' Grants & Loans Board
            </p>
          </div>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          {/* ... rest of your toggle code */}
        </div>
      </div>
    </div>
  );
};

export default LogIn;
