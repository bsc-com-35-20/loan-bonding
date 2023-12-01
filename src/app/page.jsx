'use client'
import React, { useEffect } from "react";
import './style.css';
import logoImage from './images.jpg';
import { Image } from "next/dist/client/image-component";


const Home = () => {
  useEffect(() => {
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');

    const handleRegisterClick = () => {
      container.classList.add("active");
    };

    const handleLoginClick = () => {
      container.classList.remove("active");
    };

   registerBtn.addEventListener('click', handleRegisterClick);
    loginBtn.addEventListener('click', handleLoginClick);

    return () => {
      registerBtn.removeEventListener('click', handleRegisterClick);
      loginBtn.removeEventListener('click', handleLoginClick);
    };
  }, []);

  return (
    <div className="container" id="container">
      <div className="form-container sign-up">
        <form>
          <h1>Create an Account</h1>
          <span>Use your email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <select id="uni" name="university">
            <option value="Unima">University Of Malawi</option>
            <option value="MUBAS">Malawi University of Business and Applied Sciences</option>
            <option value="Bunda">Lilongwe University of Agriculture and Natural Resources</option>
            <option value="mzuni">Mzuzu University </option>
            <option value="must">Malawi University of Science and Technology</option>
            <option value="com">College of medicine</option>
          </select>
          <button type="submit" className="button">Create account</button>
          <button className="hidden" id="register1">Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in">
        <form>
          <div className="login-header">
            <Image src={logoImage} width={245} height={197} alt="Logo"/>
            <h2>SFMIS - Login</h2>
          </div>
          <span>Use your email password</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forget your password?</a>
          <a href="#" className="hidden" id="register3">create account</a>
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

export default Home;