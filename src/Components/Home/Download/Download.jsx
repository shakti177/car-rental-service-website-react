import React from 'react'
import './Download.css'
import googleplay from '../../../Assets/googleapp.svg'
import appstore from '../../../Assets/appstore.svg'

const Download = () => {
  return (
    <section id="download_section">
        <h2 class="">Download our app to get<br/>most out of it</h2>
        <p>Thrown shy denote ten ladies though ask saw. Or by to he going sthink<br/>order event music. Incommode so intention defective at convinced. Led<br/>income months itself and houses you.</p>
        <div className="downloads_button">
            <div className="googleplay">
                <img src={googleplay} alt="" />
            </div>
            <div className="appstore">
                <img src={appstore} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Download