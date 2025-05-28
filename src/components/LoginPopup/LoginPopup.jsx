// src/components/LoginPopup/LoginPopup.jsx

import React, { useState } from 'react';
import './LoginPopup.css';
import { auth, googleProvider } from '../../firebaseConfig';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithPopup,
} from 'firebase/auth';

function LoginPopup({ setShowLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        setShowLogin(false);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        setMessage('Account created! You can now log in.');
        setIsLogin(true);
      }
    } catch (err) {
      switch (err.code) {
        case 'auth/user-not-found':
          setError('No user found with this email.');
          break;
        case 'auth/wrong-password':
          setError('Incorrect password.');
          break;
        case 'auth/invalid-email':
          setError('Invalid email address.');
          break;
        default:
          setError(err.message);
      }
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setShowLogin(false);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      setError('Enter your email to reset password.');
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Password reset email sent!');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-popup">
      <form className="login-popup-inner" onSubmit={handleSubmit}>
        <h2>{isLogin ? 'Sign In' : 'Sign Up'}</h2>

        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        {error && <div className="error">{error}</div>}
        {message && <div className="message">{message}</div>}

        <button type="submit">{isLogin ? 'Login' : 'Create Account'}</button>

        {isLogin && (
          <button
            type="button"
            className="forgot-pass"
            onClick={handleForgotPassword}
          >
            Forgot Password?
          </button>
        )}

        <div className="or-divider">OR</div>

        <button type="button" className="google-btn" onClick={handleGoogleSignIn}>
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" />
          Sign in with Google
        </button>

        <div className="switch-mode">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button type="button" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </div>

        <button type="button" className="close-btn" onClick={() => setShowLogin(false)}>
          Close
        </button>
      </form>
    </div>
  );
}

export default LoginPopup;
