import React from 'react'
import Banner from '../Components/Home/Banner/Banner'
import Filterbox from '../Components/Home/Filterbox/Filterbox'
import Hero from '../Components/Home/Hero/Hero'
import Service from '../Components/Home/Service/Service'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Filterbox/>
        <Service/>
        <Banner/>
    </div>
  )
}

export default Home