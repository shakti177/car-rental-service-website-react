import React from "react";
import "./Testimonials.css";
import img1 from "../../../Assets/person1.jpg";
import img2 from "../../../Assets/person2.jpg";
import { FaQuoteRight } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="testimonials_title">
        <h4>Reviewed by People</h4>
        <h2>Client's Testimonials</h2>
        <p>
          Discover the positive impact we've made on the our clients by reading
          through their
          <br />
          testimonials. Our clients have experienced our service and results,
          and they're eager to share
          <br />
          their positive experiences with you.
        </p>
      </div>

      <div className="testmonials_boxes">
        {/* testmonial - 1 */}

        <div className="testmonials_main">
          <div className="testmonials_main-text">
            <p>
              "We rented a car from this website and had an amazing experience!
              The booking was easy and the rental rates were very affordable. "
            </p>
            <div className="testmonials_main_user">
              <div className="testmonials_main_user-left">
                <div className="testmonials_main_user-left_img">
                  <img src={img1} alt="" />
                </div>
                <div className="testmonials_main_user-left_name">
                  <div className="testmonials_main_user-left_name-personaname">
                    <p>Parry Hotter</p>
                  </div>
                  <div className="testmonials_main_user-left_name-personaldesignation">
                    <p>Designer</p>
                  </div>
                </div>
              </div>
              <div className="testmonials_main_user-right">
                <FaQuoteRight size={60}/>
              </div>
            </div>
          </div>
        </div>

        {/* testmonial - 2 */}

        <div className="testmonials_main">
          <div className="testmonials_main-text">
            <p>
            "The car was in great condition and made our trip even better. Highly recommend for this car rental<br/>website!"
            </p>
            <div className="testmonials_main_user">
              <div className="testmonials_main_user-left">
                <div className="testmonials_main_user-left_img">
                  <img src={img2} alt="" />
                </div>
                <div className="testmonials_main_user-left_name">
                  <div className="testmonials_main_user-left_name-personaname">
                    <p>Bon Reazley</p>
                  </div>
                  <div className="testmonials_main_user-left_name-personaldesignation">
                    <p>Developer</p>
                  </div>
                </div>
              </div>
              <div className="testmonials_main_user-right">
                <FaQuoteRight size={60}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
