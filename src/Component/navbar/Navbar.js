import React from 'react'
import './Navbar.css'
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import logo from'../../assert/gericht.png'
import { useState } from 'react'

const Navbar = () => {
  const [ToggleMenu,setToggleMenu]=useState(false);
  return (
    <nav className='resturent-navbar'>
      <div className='resturent-navbar-logo'>
        <img src={logo} alt="app logo" />
      </div>
        <ul className='resturent-navbar-list'>
          <li className='resturent-navbar-link'><a href="#home">Home</a></li>
          <li className='resturent-navbar-link'><a href="#about">About</a></li>
          <li className='resturent-navbar-link'><a href="#menu">Menu</a></li>
          <li className='resturent-navbar-link'><a href="#awards">Awards</a></li>
          <li className='resturent-navbar-link'><a href="#contact">Contact</a></li>
        </ul>
        <div className='resturent-navbar-login'>
          <a href="#login" className='resturent-navbar-login-link'>Log In / Registration</a>
          <div></div>
          <a href="/" className='resturent-navbar-login-link'>Book Table</a>
        </div>
        <div className='resturent-navbar-smallscreen'>
          <GiHamburgerMenu className='resturent-navbar-smallscreen-menu-icon' onClick={()=>setToggleMenu(true)}/>
          {ToggleMenu &&(
            <div className='resturent-navbar-smallscreen-menu'>
              <MdOutlineRestaurantMenu className='resturent-navbar-smallscreen-cross-icon' onClick={()=>setToggleMenu(false)} />
              <ul className='resturent-navbar-smallscreen-list'>
                <li className='resturent-navbar-smallscreen-link'><a href="#home">Home</a></li>
                <li className='resturent-navbar-smallscreen-link'><a href="#about">About</a></li>
                <li className='resturent-navbar-smallscreen-link'><a href="#menu">Menu</a></li>
                <li className='resturent-navbar-smallscreen-link'><a href="#awards">Awards</a></li>
                <li className='resturent-navbar-smallscreen-link'><a href="#contact">Contact</a></li>
              </ul>
           </div>
          )}
      </div>
    </nav>
  )
}

export default Navbar