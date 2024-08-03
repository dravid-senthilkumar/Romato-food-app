import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets';

const LoginPopup = ({SetShowLogin}) => {
    const [signState, SetSignState] = useState('Log in');
  return (
    <div className='login-popup'>
        <form action="" className="login-popup-container">
            <div className="login-popup-title">
                <h2>{signState}</h2>
                <img onClick={() => SetShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {signState === "Log in" ? <></> : <input type="text" placeholder='Your name' required/>}
                <input type="email" placeholder='Your gmail' required/>
                <input type="password" placeholder='your password' required/>
            </div>
            <button>{signState === "Sign up" ? "Create account" : "Log in"}</button>  
            <div className="login-popup-condition">
                <input type="checkbox" required/>
                <p>By continuing, i agree to the terms of use & privacy policy.</p>
            </div>
            <div className="p-span">
                {signState === "Log in" ? <p>Create a new account  <span onClick={() => SetSignState("Sign up")}>Click here</span></p> : 
                <p>Already have an account ? <span onClick={() => SetSignState("Log in")}>Login here</span></p>}
            </div>
        </form>
    </div>
  )
}

export default LoginPopup