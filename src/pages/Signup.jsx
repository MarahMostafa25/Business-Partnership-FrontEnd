import React, { useState } from 'react';
import EmailComponent from '../Components/EmailComponent';
import PasswordComponent from '../Components/PasswordComponent';
import CompanyNameComponent from '../Components/CompanyNameComponent';
import OwnerNameComponent from '../Components/OwnerNameComponent';
import ConfirmPasswordComponent from '../Components/ConfirmPasswordComponent';
import '../Components/LoginSignup/LoginSignup.css';
import { signUp } from '../services/usersService';


function Signup(){
  const [BusinessName, setCompanyName] = useState('');
  const [OwnerName, setOwnerName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ValidPassword, setConfirmPassword] = useState('');


const handleSignup=()=>{

  const userData = {
    BusinessName,
    OwnerName,
    email,
    password,
    ValidPassword,
  };
  signUp(userData);
};


    return(
        <div className='container'>
        <div className="header">
          <div className="text">Sign up</div>
          <div className="underline"></div>
        </div>
        <div>
          <CompanyNameComponent setCompanyName={setCompanyName}/>
          <OwnerNameComponent setOwnerName={setOwnerName}/> 
          <EmailComponent setEmail={setEmail} />
          <PasswordComponent setPassword={setPassword} />
          <ConfirmPasswordComponent setConfirmPassword={setConfirmPassword}/>
        </div>
        <div className="submit-container">
          <div className="submit"  onClick={() => handleSignup() }>Sign up</div>
        </div>
      </div>
    );
}

export default Signup;

