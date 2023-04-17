import React from "react";
import "./Service.css";
import service1 from "../../../Assets/service1.png";
import service2 from "../../../Assets/service2.png";
import service3 from "../../../Assets/service3.png";

const Service = () => {
  return (
    <section id="service">
      <div className="service_title">
        <h3>Plan your trip now</h3>
        <h2>Quick & easy car rental</h2>
      </div>

      <div className="service_box">
        {/* Service 1 */}

        <div className="service_boxes">
          <img src={service1} alt="" />
          <h3>Select Car</h3>
          <p>
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs
          </p>
        </div>

        {/* Service 2 */}

        <div className="service_boxes">
          <img src={service2} alt="" />
          <h3>Contact Operator</h3>
          <p>
            Our knowledgeable and friendly operators are always ready to help
            with any questions or concerns
          </p>
        </div>

        {/* Service 3 */}

        <div className="service_boxes">
          <img src={service3} alt="" />
          <h3>Let's Drive</h3>
          <p>
            Whether you're hitting the open road, we've got you covered with our
            wide range of cars
          </p>
        </div>
      </div>
    </section>
  );
};

export default Service;
