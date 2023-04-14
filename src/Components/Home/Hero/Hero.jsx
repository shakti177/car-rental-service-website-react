import React from 'react'
import './Hero.css'
import heroimage from '../../../Assets/herocar.png'

const Hero = () => {
  return (
    <section id="hero">
      <div className="left-content">
        <h4>Plan your trip now</h4>
        <h1>Save<span> big </span>with our car rental</h1>
        <p>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>
        <div className="button_row">
          <button>Book Ride</button>
          <button style={{backgroundColor:"black"}}>Learn More</button>
        </div>
      </div>
      <div className="right-content">
        <img src={heroimage} alt="" />
      </div>
    </section>
  )
}

export default Hero