import React from 'react'
import './CSS/Loginsignup.css'

const Loginsignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-cont">
        <h1>Sign Up</h1>
        <div className="loginsignup-field">
          <input type="text" placeholder='Enter Your Name' />
          <input type="email" placeholder='Enter Your Email Address' />
          <input type="password" placeholder='Enter Your Password' />
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account? <span>Login here</span></p>
        <div className="loginsignup-tp">
          <input type="checkbox" name='' id='' />
          <p>I agree to the terms and conditions</p>
        </div>
      </div>
     
    </div>
  )
}

export default Loginsignup