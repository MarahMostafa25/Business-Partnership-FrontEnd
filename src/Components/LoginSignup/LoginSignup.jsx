import React from "react";
import './LoginSignup.css'

import Company_icon from '../Assets/company_icon.png'
import user_icon from '../Assets/person_icon.png'
import email_icon from '../Assets/email_icon.png'
import password_icon from '../Assets/password_icon.png'
import partnership_icon from '../Assets/partnership_icon.png'

const LoginSignup1 = () => {
    return (
        <div className="background_icon">
            <img src={partnership_icon} alt=""/>
        </div>
    );
}

const LoginSignup = () => {
    return (
        <div className='container'>
            <div className="header">
                <div className="text">Sign Up</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={Company_icon} alt=""/>
                    <input type="text" placeholder="Company name"/>
                </div>
                <div className="input">
                    <img src={user_icon} alt=""/>
                    <input type="text" placeholder="Owner name"/>
                </div>
                <div className="input">
                    <img src={email_icon} alt=""/>
                    <input type="email" placeholder="Email"/>
                </div>
                <div className="input">
                    <img src={password_icon} alt=""/>
                    <input type="password" placeholder="Password"/>
                </div>
                <div className="input">
                    <img src={password_icon} alt=""/>
                    <input type="password" placeholder="Confirm Password"/>
                </div>
            </div>
            <div className="submit-container">
                <div className="submit" onClick={() => { /* Handle Sign Up */ }}>Sign Up</div>
            </div>
        </div>
    );
}

export { LoginSignup, LoginSignup1 };
