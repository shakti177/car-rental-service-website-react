import React from "react";
import "./Aboutsection.css";
import aboutimg from "../../../Assets/about_main.jpg";
import icon1 from "../../../Assets/about_main-1.png";
import icon2 from "../../../Assets/about_main-2.png";
import icon3 from "../../../Assets/about_main-3.png";
import Service from "../../Home/Service/Service";

const Aboutsection = () => {
  return (
    <section id="about_section">
      <div className="about_main">
        <div className="about_main_left">
          <img src={aboutimg} alt="" />
        </div>
        <div className="about_main_right">
          <div className="about_main_right_text">
            <h3>About Company</h3>
            <h2>You start the engine and your adventure begins</h2>
            <p>
              Certain but she but shyness why cottage. Guy the put instrument
              sir entreaties affronting. Pretended exquisite see cordially the
              you. Weeks quiet do vexed or whose. Motionless if no to affronting
              imprudence no precaution. My indulged as disposal strongly
              attended.
            </p>
          </div>

          <div className="about_main_box">

            {/* Icon 1 */}

            <div className="about_main_box_row">
              <div className="about_main_box_icon">
                <img src={icon1} alt="" />
              </div>

              <div className="about_main_box_text">
                <div className="about_main_box_text-number">
                  <h4>20</h4>
                </div>

                <div className="about_main_box_text-text">
                  <p>Car types</p>
                </div>
              </div>
            </div>

            {/* icon 2 */}
            <div className="about_main_box_row">
              <div className="about_main_box_icon">
                <img src={icon2} alt="" />
              </div>

              <div className="about_main_box_text">
                <div className="about_main_box_text-number">
                  <h4>85</h4>
                </div>

                <div className="about_main_box_text-text">
                  <p>Rental Outlets</p>
                </div>
              </div>
            </div>

            {/* icon 3 */}
            <div className="about_main_box_row">
              <div className="about_main_box_icon">
                <img src={icon3} alt="" />
              </div>

              <div className="about_main_box_text">
                <div className="about_main_box_text-number">
                  <h4>75</h4>
                </div>

                <div className="about_main_box_text-text">
                  <p>Repair Shop</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Service section */}

      <Service/>

    </section>
  );
};

export default Aboutsection;
