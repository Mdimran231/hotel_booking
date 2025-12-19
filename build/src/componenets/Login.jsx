import React, { useState } from 'react';
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  


const Login = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const notify =() => {
    toast("login sucessfully");
  }

  const handleSwitch = () => {
    setIsRegistering(!isRegistering);
    setEmail('');
    setPassword('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mode = isRegistering ? 'Registered' : 'Logged in';
    alert(`${mode} with\nEmail: ${email}\nPassword: ${password}`);
    // Replace this with real backend/auth logic
  };

  return (
    <>
    
      <div className="bg">
        <div className="auth-container">
          <form className="auth-form" onSubmit={handleSubmit}>
            <h2>{isRegistering ? 'Create Account' : 'Welcome Back'}</h2>
            <p>{isRegistering ? 'Join us by creating your account' : 'Login to your account'}</p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type='submit' onClick={notify} >
          {isRegistering ? 'Sign Up' : 'Login'}
        </button>;
       

        <div className="toggle-message">
          {isRegistering ? 'Already have an account?' : "Don't have an account?"}
          <span onClick={handleSwitch}>
            {isRegistering ? ' Login' : ' Sign Up'}
          </span>
        </div>
      </form>
    </div>
     
    </div>
     <ToastContainer/>
     </>
  );
};

export default Login;
