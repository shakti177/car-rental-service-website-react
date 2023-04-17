import React from "react";
import "./Details.css";
import detailimg from "../../../Assets/Details_img.png";
import detail1 from "../../../Assets/Details_1.png";
import detail2 from "../../../Assets/Details_2.png";
import detail3 from "../../../Assets/Details_3.png";

const Details = () => {
  return (
    <section id="Detail">
      <div className="details">
        <div className="details_img">
          <img src={detailimg} alt="" />
        </div>

        <div className="detail_container">
          <div className="detail_container_left">
            <h4>Why Choose Us</h4>
            <h2>Best valued deals you will ever find</h2>
            <p>
              Discover the best deals you'll ever find with our unbeatable
              offers. We're dedicated to providing you with the best value for
              your money, so you can enjoy top-quality services and products
              without breaking the bank. Our deals are designed to give you the
              ultimate renting experience, so don't miss out on your chance to
              save big.
            </p>
            <button className="Details_button">Find Details</button>
          </div>

          <div className="detail_container_right">
            <div className="detail_container_right_box">
              <img src={detail1} alt="" />
              <div className="detail_container_right_box_text">
                <h4>Cross Country Drive</h4>
                <p>
                  Take your driving experience to the next level with our
                  top-notch vehicles for your cross-country adventures.
                </p>
              </div>
            </div>
            <div className="detail_container_right_box">
              <img src={detail2} alt="" />
              <div className="detail_container_right_box_text">
                <h4>All Inclusive Pricing</h4>
                <p>
                  Get everything you need in one convenient, transparent price
                  with our all-inclusive pricing policy.
                </p>
              </div>
            </div>
            <div className="detail_container_right_box">
              <img src={detail3} alt="" />
              <div className="detail_container_right_box_text">
                <h4>No Hidden Charges</h4>
                <p>
                  Enjoy peace of mind with our no hidden charges policy. We
                  believe in transparent and honest pricing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
