
import React from 'react';
import Head from 'next/head';

const Home = () => {
  return (
    <div className="container" id="container">
      <Head>
        <title>Log In Sample</title>
      </Head>
      <div className="form-container sign-up">
        <form>
          <h1>Create Account</h1>
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
          <button>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in">
        <form>
          <div className="login-header">
            <img src="images.jpg" alt="Logo" className="logo-login" />
            <h2>SFMIS - Login</h2>
          </div>
          <span>Use your email password</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forget your password?</a>
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