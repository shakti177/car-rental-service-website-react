import React from "react";
import "./Testimonialsmain.css";
import { Link } from "react-router-dom";
import subheaderimg from "../../../src/Assets/subhero.png";

const Testimonials_main = () => {
  return (
    <section id="testimonialsmain">
      <img src={subheaderimg} className="imgsubheader" alt=""/>
      <div className="left">
        <p>
          <h3>Testimonials</h3>
          <Link to="/">Home</Link> / Testimonials
        </p>
      </div>
    </section>
  );
};

export default Testimonials_main;
