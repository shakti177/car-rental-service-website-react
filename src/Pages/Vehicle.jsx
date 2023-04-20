import React from 'react'
import VehicleSection from '../Components/Vehicle/VehicleMain/VehicleSection'
import VehicleSubHeader from '../Components/Vehicle/VehicleSub/VehicleSubHeader'
import Aboutbanner from '../Components/About/Aboutbanner/Aboutbanner';

const Vehicle = () => {
  return (
    <div>
      <VehicleSubHeader/>
      <VehicleSection/>
      <Aboutbanner/>
    </div>
  )
}

export default Vehicle