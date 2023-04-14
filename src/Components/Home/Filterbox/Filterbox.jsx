import React from "react";
import { AiFillCar } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { BsFillCalendarWeekFill } from "react-icons/bs";
import "./Filterbox.css";
const Filterbox = () => {
  return (
    <section id="filterbox">
      <div className="box">
        <h2>Book a Car</h2>
        <form>
          <div className="filterbox_row">
            <div className="form_label">
              <label htmlFor="cartype">
                <AiFillCar size={20} className="filerbox_icons"/>
                Select you car type<span>*</span>
              </label>
              <select name="cartype" id="">
                <option value="" disabled selected hidden>Select Your Car Type</option>
                <option value="Audi">Audi</option>
                <option value="BMW">BMW</option>
                <option value="MG">MG</option>
                <option value="Tata">Tata</option>
                <option value="Suzuki">Suzuki</option>
              </select>
            </div>

            {/* option-2 */}

            <div className="form_label">
              <label htmlFor="pickup">
                <HiLocationMarker size={20} className="filerbox_icons"/>
                Pick Up<span>*</span>
              </label>
              <select name="pickup" id="">
                <option value="" disabled selected hidden>Select Pick Up Location</option>
                <option value="Bhopal">Bhopal</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Pune">Pune</option>
                <option value="New Delhi">New Delhi</option>
                <option value="Indore">Indore</option>
              </select>
            </div>

            {/* Option-3 */}

            <div className="form_label">
              <label htmlFor="dropof">
                <HiLocationMarker size={20} className="filerbox_icons"/>
                Drop Off<span>*</span>
              </label>
              <select name="dropof" id="">
                <option value="" disabled selected hidden>Select Drop of Location</option>
                <option value="New Delhi">New Delhi</option>
                <option value="Bhopal">Bhopal</option>
                <option value="Pune">Pune</option>
                <option value="Indore">Indore</option>
                <option value="Mumbai">Mumbai</option>
              </select>
            </div>
          </div>

          {/* row-2 */}

          <div className="filterbox_row">
            <div className="form_label">
              <label htmlFor="cardate">
                <BsFillCalendarWeekFill size={20} className="filerbox_icons"/>
                Pick-up<span>*</span>
              </label>
              <input type="date" name="cardate" />
            </div>

            {/* option-2 */}

            <div className="form_label">
              <label htmlFor="cardate">
                <BsFillCalendarWeekFill size={20} className="filerbox_icons"/>
                Drop-off<span>*</span>
              </label>
              <input type="date" name="cardate" />
            </div>

            {/* Option-3 */}

            <input type="submit" value="Search" className="filterbox_button" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Filterbox;