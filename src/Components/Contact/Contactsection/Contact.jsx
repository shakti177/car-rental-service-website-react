import React from "react";
import "./Contact.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { HiLocationMarker } from "react-icons/hi";
import { FaEnvelopeOpenText } from "react-icons/fa";

const contact = () => {
  return (
    <section id="contact_section">
      <div className="contact_section_box">
        <div className="contact_section_box-left">
          <h2>Need additional information?</h2>
          <p>
            A multifaceted professional skilled in multiple fields of research,
            development as well as a learning specialist. Over 15 years of
            experience.
          </p>
          <div className="contact_section_info">
            <h4>
              <BsFillTelephoneFill /> (123) 456-7869
            </h4>
            <h4>
              <IoMdMail /> randommail@gmail.com
            </h4>
            <h4>
              <HiLocationMarker /> Indore, India
            </h4>
          </div>
        </div>

        <div className="contact_section_box-right">
          <div className="contact_section_column">
            <label htmlFor="name">
              Full Name<span> *</span>
            </label>
            <input type="text" placeholder="E.g: John Stark" />
          </div>
          <div className="contact_section_column">
            <label htmlFor="email">
              Email<span> *</span>
            </label>
            <input type="text" placeholder="youremail@gmail.com" />
          </div>
          <div className="contact_section_column">
            <label htmlFor="Contact_about">
              Tell Us About it<span> *</span>
            </label>
            <textarea
              type="textarea"
              placeholder="Write Here..."
              style={{ height: "150px" }}
            />
          </div>
          <div className="contact_section_column">
            <button>
              <FaEnvelopeOpenText /> Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default contact;
