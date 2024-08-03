import React from 'react'
import './Footer.css';
import { assets } from '../../assets/assets'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.romato} alt="" />
                <p>Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-centre">
                <h2>COMPANY</h2>
                <ul>
                <a href="/"> <li>Home</li> </a>
                <a href="/"> <li>About us</li> </a>
                <a href="/cart"> <li>Delivery</li> </a>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-9585759609</li>
                    <li>romato@contact.com</li>
                </ul>
            </div>
        </div>
        <hr />
       <p className="footer-copyrights">
        Copyrights 2024 &copy; Romato.com - All Right Reserved.
       </p>
    </div>
  )
}

export default Footer