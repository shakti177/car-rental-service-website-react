import React from "react";
import "./Footer.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <section className="footer">
      {/* section 1 */}
      <div className="section">
        <ul className="section1_content">
          <li>
            <span>CAR</span> Rental
          </li>
          <li>
            <p>
              We offers a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs.
            </p>
          </li>
          <li>
            <BsFillTelephoneFill /> 123-456-789
          </li>
          <li>
            <IoMdMail /> randommail@gmail.com
          </li>
          <li>Design by XpeedStudio</li>
        </ul>
      </div>
      {/* section 2 */}
      <div className="section">
        <ul className="section_content">
          <li>COMPANY</li>
          <li>New York</li>
          <li>Careers</li>
          <li>Mobile</li>
          <li>Blog</li>
          <li>How We Work</li>
        </ul>
      </div>
      {/* section 3 */}
      <div className="section">
      <ul className="section_content">
          <li>WORKING HOURS</li>
          <li>Mon - Fri: 9:00AM - 9:00PM</li>
          <li>Sat: 9:00AM - 19:00PM</li>
          <li>Sun: Closed</li>
        </ul>
      </div>
      {/* section 4 */}
      <div className="section">
      <ul className="section_content4">
          <li>SUBSCRIPTION</li>
          <li>Subscribe your Email address for latest news & updates.</li>
          <li><input type="text" placeholder="Enter Email Address"/></li>
          <li><button>Submit</button></li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
