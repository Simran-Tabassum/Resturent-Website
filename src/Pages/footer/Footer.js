import React from 'react'
import './Footer.css'
import {FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi'
import Newsletter from '../../Component/newsletter/Newsletter'
import footerlogo from '../../assert/gericht.png'
import spoon from'../../assert/spoon.png'
import { useState } from 'react'


const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  return (
    <div className='footer'>
        <Newsletter/>
        <div className="footer-links" id="login">
          <div className="footer-links-contact">
            <h1 className="footer-headtext">Contact Us</h1>
            <p className="footer-text">9 W 53rd St, New York, NY 10019, USA</p>
            <p className="footer-text">+1 212-344-1230</p>
            <p className="footer-text">+1 212-555-1230</p>
          </div>
          <div className="footer-links-logo">
            <img src={footerlogo} alt="footer-logo" />
            <p className="footer-text">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
            <img src={spoon} className="spoon-img" style={{ marginTop: 15 }} />
            <div className="footer-links-logo-icons">
              <FiFacebook className='icons' />
              <FiTwitter className='icons' />
              <FiInstagram className='icons' />
            </div>
          </div>
          <div className="footer-links-work">
            <h1 className="footer-headtext">Working Hours</h1>
            <p className="footer-text">Monday-Friday:</p>
            <p className="footer-text">08:00 am - 12:00 am</p>
            <p className="footer-text">Saturday-Sunday:</p>
            <p class Name="footer-text" style={{color:'#FFFFFF'}}>07:00 am - 11:00 pm</p>
          </div>
        </div>
        <div className="footer-copyright">
          <p className="footer-text">{currentYear} Gericht. All Rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer