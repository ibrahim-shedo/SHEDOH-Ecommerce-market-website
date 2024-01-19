import React from 'react'
import './CSS/LoginSingup.css'

export const LoginSingup = () => {
  return (
    <div className='loginsingup'>
       <div className="loginsingup-container">
        <h1>Sing Up</h1>
        <div className="loginsingup-fields">
          <input type="text" placeholder='your name'/>
          <input type="email" placeholder='email address'/>
          <input type="password"  placeholder='your password'/>
        </div>
        <button>Continue</button>
        <p className='loginsingup-login'>Already have an account? <span>login here</span></p>
        <div className="loginsingup-agree">
          <input type="checkbox" name='' id=''/>
          <p>by continuing, i agree to the terms of use & privocy policys</p>
        </div>
       </div>
    </div>
  )
}
export default LoginSingup;
