import React, { useState } from 'react';
import EmailComponent from '../Components/EmailComponent';
import PasswordComponent from '../Components/PasswordComponent';
import '../Components/LoginSignup/LoginSignup.css';
import { login } from '../services/usersService';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('eamil:',email,password);
    login(email,password);
  };

  return (
    <div className='container'>
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>
      <div>
        <EmailComponent setEmail={setEmail} />
        <PasswordComponent setPassword={setPassword} />
      </div>
      <div className="forgot-password">forgot Password?<span>Click Here!</span></div>
      <div className="Dont-have-an-account">Don't have an account? <span> Regiester</span> </div>
      <div className="submit-container">
        <div className="submit" onClick={() => handleLogin()}>Login</div>
      </div>
    </div>
  );
}

export default Login;
