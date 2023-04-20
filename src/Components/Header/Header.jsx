import React from 'react'
import './Header.css'
import logo from '../../../src/Assets/logo.png'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <section id='navbar'>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="menu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/Vehicle">Vehicle</Link></li>
          <li><Link to="/testimonials">Testimonials</Link></li>
          <li><Link to="/team">Team</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className="nav_button">
        <button>Sign Up</button>
      </div>
    </section>
  )
}

export default Header