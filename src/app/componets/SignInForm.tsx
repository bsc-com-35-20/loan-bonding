'use client'
import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
import logoImage from './images.jpg';
import './styleSignIn.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const SignInForm = () => {
  const router = useRouter();

  const { status } = useSession();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage('Signing in...');

    try {
      const signInResponse = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (signInResponse?.ok) {
        router.push('/'); // Redirect to the home page or any other page on successful sign-in
      } else {
        setMessage('Invalid credentials');
      }
    } catch (err) {
      console.error(err);
      setMessage('An error occurred during sign-in');
    }
  };

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/');
    }
  }, [status]);

  return (
    <div className="container" id="container">
      <div className="form-container sign-in" id="sigNin">
        <form onSubmit={handleSubmit}>
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
          <p>Don't have an account?</p>
          <button type="submit">Sign In</button>
          <p>{message}</p>
          <div className="text-center">
            <p>© 2023 Higher Education Students' Grants & Loans Board</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
