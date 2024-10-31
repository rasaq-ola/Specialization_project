import React from 'react'
import './Footer.css'
import Olalogo from '../Assets/Olalogo.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={Olalogo} alt="" />
            <p>Let's go shopping</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Product</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src="" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer