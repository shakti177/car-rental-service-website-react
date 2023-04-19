import React from 'react'
import Contactsection from '../../src/Components/Contact/Contactsection/Contact'
import Contactsubheader from '../Components/Contact/Contactsubheader/Contact_subheader'
import Aboutbanner from '../Components/About/Aboutbanner/Aboutbanner'

const Contact = () => {
  return (
    <div>
      <Contactsubheader/>
      <Contactsection/>
      <Aboutbanner/>
    </div>
  )
}

export default Contact