import React from "react";
import "./Aboutbanner.css";
import { BsFillTelephoneFill } from "react-icons/bs";

const About_banner = () => {
  return (
    <section id="about_banner">
      <div className="about_banner_section">
        <h2>Book a car by getting in touch with us</h2>
      </div>
      <div className="about_banner_section_span">
        <h2>
          <BsFillTelephoneFill /> (123) 456-7869
        </h2>
      </div>
    </section>
  );
};

export default About_banner;
