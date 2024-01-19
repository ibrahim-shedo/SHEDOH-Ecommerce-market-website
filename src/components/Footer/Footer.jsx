import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/Assets/logo_big.png'
import instagram_icon from '../Assets/Assets/instagram_icon.png'
import pistester_icon from '../Assets/Assets/pintester_icon.png'
import whatsup_icon from '../Assets/Assets/whatsapp_icon.png'

function Footer() {
  return (
    <div className='footer'>
    <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>SHEDOH</p>
    </div>
    <ul className="footer-links">
        <li>Compony</li>
        <li>Product</li>
        <li>Officers</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
    <div className="footer-social-icon">
        <div className="footer-icons-container">
            <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={pistester_icon} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={whatsup_icon} alt="" />
        </div>
    </div>
    <div className="footer-copyright">
        <hr />
        <p>copyright 2024 by GitHub @ibrahim-shedo</p>
    </div>
    </div>
  )
}

export default Footer