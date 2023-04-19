import React from 'react'
import Banner from '../Components/Home/Banner/Banner'
import Details from '../Components/Home/Details/Details'
import Filterbox from '../Components/Home/Filterbox/Filterbox'
import Hero from '../Components/Home/Hero/Hero'
import Service from '../Components/Home/Service/Service'
import Testimonials from '../Components/Home/Testimonials_home/Testimonials'
import Downloads from '../Components/Home/Download/Download'
import FAQ from '../Components/Home/FAQ/FAQ'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Filterbox/>
        <Service/>
        <Banner/>
        <Details/>
        <Testimonials/>
        <FAQ/>
        <Downloads/>
    </div>
  )
}

export default Home