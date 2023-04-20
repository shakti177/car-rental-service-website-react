import React from "react";
import "./VehicleSection.css";
import { AiFillStar } from "react-icons/ai";
import { AiFillCar } from "react-icons/ai";
import audi from "../../../Assets/audi.png";
import golf from "../../../Assets/golf6.png";
import toyota from "../../../Assets/toyota.png";
import bmw from "../../../Assets/bmw.png";
import mercedes from "../../../Assets/mercedes.png";
import VW from "../../../Assets/VWPassat.png";

const VehicleSection = () => {
  return (
    <section id="vehicle_main">
      <div className="vehicle_section">

        {/* card 1 */}

        <div className="vehicle_card">
          <div className="vehicle_card_img">
            <img src={audi} alt="" />
          </div>
          <div className="vehicle_card_info">
            <div className="vehicle_card_cardescription">
              <div className="Vehicle_card_cardescription-left">
                <div className="name">
                  <p>Audi A1</p>
                </div>
                <div className="rating">
                  <AiFillStar className="rating-icon" />
                  <AiFillStar className="rating-icon" />
                  <AiFillStar className="rating-icon" />
                  <AiFillStar className="rating-icon" />
                  <AiFillStar className="rating-icon" />
                </div>
              </div>
              <div className="Vehicle_card_cardescription-right">
                <div className="price">
                  <h4>$45</h4>
                </div>
                <div className="days">
                  <p>per day</p>
                </div>
              </div>
            </div>

            {/* next row */}

            <div className="Vehicle_cartype">
              <div className="Vehicle_cartype-left">
                <div className="car-name">
                  <p>
                    <AiFillCar /> Audi
                  </p>
                </div>
                <div className="car-type">
                  <p>
                    <AiFillCar /> Manual
                  </p>
                </div>
              </div>
              <div className="Vechicle_cartype-right">
                <div className="car-rating">
                  <p>
                    4/5 <AiFillCar />
                  </p>
                </div>
                <div className="car-fuel">
                  <p>
                    Diesel <AiFillCar />
                  </p>
                </div>
              </div>
            </div>
            <hr />
            <button>Book Ride</button>
          </div>
        </div>

        {/* card 2 */}

        <div className="vehicle_card">
          <div className="vehicle_card_img">
            <img src={golf} alt="" />
          </div>
          <div className="vehicle_card_info">
            <div className="vehicle_card_cardescription">
              <div className="Vehicle_card_cardescription-left">
                <div className="name">
                  <p>Golf 6</p>
                </div>
                <div className="rating">
                  <AiFillStar className="rating-icon" />
                  <AiFillStar className="rating-icon" />
                  <AiFillStar className="rating-icon" />
                  <AiFillStar className="rating-icon" />
                  <AiFillStar className="rating-icon" />
                </div>
              </div>
              <div className="Vehicle_card_cardescription-right">
                <div className="price">
                  <h4>$37</h4>
                </div>
                <div className="days">
                  <p>per day</p>
                </div>
              </div>
            </div>

            {/* next row */}

            <div className="Vehicle_cartype">
              <div className="Vehicle_cartype-left">
                <div className="car-name">
                  <p>
                    <AiFillCar /> VW
                  </p>
                </div>
                <div className="car-type">
                  <p>
                    <AiFillCar /> Manual
                  </p>
                </div>
              </div>
              <div className="Vechicle_cartype-right">
                <div className="car-rating">
                  <p>
                    4/5 <AiFillCar />
                  </p>
                </div>
                <div className="car-fuel">
                  <p>
                    Diesel <AiFillCar />
                  </p>
                </div>
              </div>
            </div>
            <hr />
            <button>Book Ride</button>
          </div>
        </div>

        {/* card 3 */}

        <div className="vehicle_card">
          <div className="vehicle_card_img">
            <img src={toyota} alt="" />
          </div>
          <div className="vehicle_card_info">
            <div className="vehicle_card_cardescription">
              <div className="Vehicle_card_cardescription-left">
                <div className="name">
                  <p>Toyota</p>
                </div>
                <div className="rating">
                  <AiFillStar className="rating-icon" />
                  <AiFillStar className="rating-icon" />
                  <AiFillStar className="rating-icon" />
                  <AiFillStar className="rating-icon" />
                  <AiFillStar className="rating-icon" />
                </div>
              </div>
              <div className="Vehicle_card_cardescription-right">
                <div className="price">
                  <h4>$30</h4>
                </div>
                <div className="days">
                  <p>per day</p>
                </div>
              </div>
            </div>

            {/* next row */}

            <div className="Vehicle_cartype">
              <div className="Vehicle_cartype-left">
                <div className="car-name">
                  <p>
                    <AiFillCar /> Camry
                  </p>
                </div>
                <div className="car-type">
                  <p>
                    <AiFillCar /> Manual
                  </p>
                </div>
              </div>
              <div className="Vechicle_cartype-right">
                <div className="car-rating">
                  <p>
                    4/5 <AiFillCar />
                  </p>
                </div>
                <div className="car-fuel">
                  <p>
                    Diesel <AiFillCar />
                  </p>
                </div>
              </div>
            </div>
            <hr />
            <button>Book Ride</button>
          </div>
        </div>

      </div>

    {/* row 2 */}

    <div className="vehicle_section">

        {/* card 1 */}

        <div className="vehicle_card">
          <div className="vehicle_card_img">
            <img src={bmw} alt="" />
          </div>
          <div className="vehicle_card_info">
            <div className="vehicle_card_cardescription">
              <div className="Vehicle_card_cardescription-left">
                <div className="name">
                  <p>BMW 320</p>
                </div>
                <div className="rating">
                  <AiFillStar className="rating-icon" />
                  <AiFillStar className="rating-icon" />
                  <AiFillStar className="rating-icon" />
                  <AiFillStar className="rating-icon" />
                  <AiFillStar className="rating-icon" />
                </div>
              </div>
              <div className="Vehicle_card_cardescription-right">
                <div className="price">
                  <h4>$35</h4>
                </div>
                <div className="days">
                  <p>per day</p>
                </div>
              </div>
            </div>

            {/* next row */}

            <div className="Vehicle_cartype">
              <div className="Vehicle_cartype-left">
                <div className="car-name">
                  <p>
                    <AiFillCar /> Modern
                  </p>
                </div>
                <div className="car-type">
                  <p>
                    <AiFillCar /> Manual
                  </p>
                </div>
              </div>
              <div className="Vechicle_cartype-right">
                <div className="car-rating">
                  <p>
                    4/5 <AiFillCar />
                  </p>
                </div>
                <div className="car-fuel">
                  <p>
                    Diesel <AiFillCar />
                  </p>
                </div>
              </div>
            </div>
            <hr />
            <button>Book Ride</button>
          </div>
        </div>

        {/* card 2 */}

        <div className="vehicle_card">
          <div className="vehicle_card_img">
            <img src={mercedes} alt="" />
          </div>
          <div className="vehicle_card_info">
            <div className="vehicle_card_cardescription">
              <div className="Vehicle_card_cardescription-left">
                <div className="name">
                  <p>Mercedes</p>
                </div>
                <div className="rating">
                  <AiFillStar className="rating-icon" />
                  <AiFillStar className="rating-icon" />
                  <AiFillStar className="rating-icon" />
                  <AiFillStar className="rating-icon" />
                  <AiFillStar className="rating-icon" />
                </div>
              </div>
              <div className="Vehicle_card_cardescription-right">
                <div className="price">
                  <h4>$50</h4>
                </div>
                <div className="days">
                  <p>per day</p>
                </div>
              </div>
            </div>

            {/* next row */}

            <div className="Vehicle_cartype">
              <div className="Vehicle_cartype-left">
                <div className="car-name">
                  <p>
                    <AiFillCar /> Benz
                  </p>
                </div>
                <div className="car-type">
                  <p>
                    <AiFillCar /> Manual
                  </p>
                </div>
              </div>
              <div className="Vechicle_cartype-right">
                <div className="car-rating">
                  <p>
                    4/5 <AiFillCar />
                  </p>
                </div>
                <div className="car-fuel">
                  <p>
                    Diesel <AiFillCar />
                  </p>
                </div>
              </div>
            </div>
            <hr />
            <button>Book Ride</button>
          </div>
        </div>

        {/* card 3 */}

        <div className="vehicle_card">
          <div className="vehicle_card_img">
            <img src={VW} alt="" />
          </div>
          <div className="vehicle_card_info">
            <div className="vehicle_card_cardescription">
              <div className="Vehicle_card_cardescription-left">
                <div className="name">
                  <p>VW Passat</p>
                </div>
                <div className="rating">
                  <AiFillStar className="rating-icon" />
                  <AiFillStar className="rating-icon" />
                  <AiFillStar className="rating-icon" />
                  <AiFillStar className="rating-icon" />
                  <AiFillStar className="rating-icon" />
                </div>
              </div>
              <div className="Vehicle_card_cardescription-right">
                <div className="price">
                  <h4>$25</h4>
                </div>
                <div className="days">
                  <p>per day</p>
                </div>
              </div>
            </div>

            {/* next row */}

            <div className="Vehicle_cartype">
              <div className="Vehicle_cartype-left">
                <div className="car-name">
                  <p>
                    <AiFillCar /> CC
                  </p>
                </div>
                <div className="car-type">
                  <p>
                    <AiFillCar /> Manual
                  </p>
                </div>
              </div>
              <div className="Vechicle_cartype-right">
                <div className="car-rating">
                  <p>
                    4/5 <AiFillCar />
                  </p>
                </div>
                <div className="car-fuel">
                  <p>
                    Diesel <AiFillCar />
                  </p>
                </div>
              </div>
            </div>
            <hr />
            <button>Book Ride</button>
          </div>
        </div>

      </div>

    </section>
  );
};

export default VehicleSection;
