import React from "react";
import "./Subheader.css";
import { Link } from "react-router-dom";
import subheaderimg from "../../../Assets/subhero.png";

const Subhearder = () => {
  return (
    <section id="subheader">
      <img src={subheaderimg} alt="" />

      <div className="left">
        <p>
          <h3>About</h3>
          <Link to="/">Home</Link> / About
        </p>
      </div>
    </section>
  );
};

export default Subhearder;
