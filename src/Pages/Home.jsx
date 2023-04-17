import React from 'react'
import Banner from '../Components/Home/Banner/Banner'
import Details from '../Components/Home/Details/Details'
import Filterbox from '../Components/Home/Filterbox/Filterbox'
import Hero from '../Components/Home/Hero/Hero'
import Service from '../Components/Home/Service/Service'
import Testimonials from '../Components/Home/Testimonials/Testimonials'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Filterbox/>
        <Service/>
        <Banner/>
        <Details/>
        <Testimonials/>
    </div>
  )
}

export default Home