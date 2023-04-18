import React from 'react'
import Aboutsection from '../Components/About/AboutSection/Aboutsection';
import Aboutbanner from '../Components/About/Aboutbanner/About_banner';
import Subhearder from '../Components/About/Subheader/Subhearder';

const About = () => {
  return (
    <div>
      <Subhearder/>
      <Aboutsection/>
      <Aboutbanner/>
    </div>
  )
}

export default About