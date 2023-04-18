import React from "react";
import "./Subheader.css";
import { Link } from "react-router-dom";

const Subhearder = () => {
  return (
    <section id="subheader">
      <div className="background_overlay"></div>
        <h3>About</h3>
        <p>
          <Link to="/">Home</Link> / About
        </p>
    </section>
  );
};

export default Subhearder;
