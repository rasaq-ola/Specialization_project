import React from 'react'
import './Footer.css'
import Olalogo from '../Assets/Olalogo.png'
import Instagramicon from '../Assets/Instagramicon.png'
import Linkedinicon from '../Assets/Linkedinicon.png'
import Facebookicon from '../Assets/Facebookicon.png'
import Twittericon from '../Assets/Twittericon.png'

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
                <img src={Instagramicon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={Facebookicon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={Twittericon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={Linkedinicon} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copright @ 2024 - All right reserved</p>
        </div>
    </div>
  )
}

export default Footer