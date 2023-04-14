import React from 'react'
import './Header.css'
import logo from '../../../src/Assets/logo.png'

const Header = () => {
  return (
    <section id='navbar'>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="menu">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Vehicle</li>
          <li>Team</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="nav_button">
        <button>Sign Up</button>
      </div>
    </section>
  )
}

export default Header