import React from "react";
import "./Contact_subheader.css";
import { Link } from "react-router-dom";
import subheaderimg from "../../../Assets/subhero.png";

const Contact_subheader = () => {
  return (
    <section id="contact_subheader">
      <img src={subheaderimg} alt="" />

      <div className="left">
        <p>
          <h3>Contact</h3>
          <Link to="/">Home</Link> / Contact
        </p>
      </div>
    </section>
  );
};

export default Contact_subheader;
