import React from "react";
import "./Teamsection.css";
import team1 from "../../../Assets/team_member1.png";
import team2 from "../../../Assets/team_member2.png";
import team3 from "../../../Assets/team_member3.png";
import team4 from "../../../Assets/team_member4.png";
import team5 from "../../../Assets/team_member5.png";
import team6 from "../../../Assets/team_member6.png";

const Teamsection = () => {
  return (
    <section id="team">
      <div className="team_section">
        {/* team 1 */}

        <div className="team_member">
          <div className="team_member_img">
            <img src={team1} alt="" />
          </div>
          <div className="team_member_description">
            <h3>Luke Miller</h3>
            <p>Salesman</p>
          </div>
        </div>

        {/* team 2 */}

        <div className="team_member">
          <div className="team_member_img">
            <img src={team2} alt="" />
          </div>
          <div className="team_member_description">
            <h3>Michael Diaz</h3>
            <p>Business Owner</p>
          </div>
        </div>

        {/* team 3 */}

        <div className="team_member">
          <div className="team_member_img">
            <img src={team3} alt="" />
          </div>
          <div className="team_member_description">
            <h3>Briana Ross</h3>
            <p>Photographer</p>
          </div>
        </div>
      </div>

      {/* row 2 */}

      <div className="team_section">
        {/* team 1 */}

        <div className="team_member">
          <div className="team_member_img">
            <img src={team4} alt="" />
          </div>
          <div className="team_member_description">
            <h3>Lauren Rivera</h3>
            <p>Car Detailist</p>
          </div>
        </div>

        {/* team 5 */}

        <div className="team_member">
          <div className="team_member_img">
            <img src={team5} alt="" />
          </div>
          <div className="team_member_description">
            <h3>Martin Rizz</h3>
            <p>Mechanic</p>
          </div>
        </div>

        {/* team 6 */}

        <div className="team_member">
          <div className="team_member_img">
            <img src={team6} alt="" />
          </div>
          <div className="team_member_description">
            <h3>Caitlyn Hunt</h3>
            <p>Manager</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teamsection;
