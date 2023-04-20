import React from "react";
import "./VehicleSubHeader.css";
import { Link } from "react-router-dom";
import subheaderimg from "../../../Assets/subhero.png";

const VehicleSubHeader = () => {
  return (
    <section id="vehiclesubheader">
      <img src={subheaderimg} alt="" />

      <div className="left">
        <p>
          <h3>Vehicle</h3>
          <Link to="/">Home</Link> / Vehicle
        </p>
      </div>
    </section>
  );
};

export default VehicleSubHeader;
