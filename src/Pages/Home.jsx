import React from 'react'
import Banner from '../Components/Home/Banner/Banner'
import Details from '../Components/Home/Details/Details'
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
        <Details/>
    </div>
  )
}

export default Home