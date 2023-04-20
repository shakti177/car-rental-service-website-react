import React from 'react'
import './Teamsubheader.css'
import { Link } from "react-router-dom";
import subheaderimg from "../../../Assets/subhero.png";

const teamsubheader = () => {
  return (
    <section id="teamsub">
      <img src={subheaderimg} alt="" />

      <div className="left">
        <p>
          <h3>Team</h3>
          <Link to="/">Home</Link> / Team
        </p>
      </div>
    </section>
  )
}

export default teamsubheader