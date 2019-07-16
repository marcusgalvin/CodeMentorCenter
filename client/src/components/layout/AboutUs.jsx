import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <Fragment>
      <div>
        <p className="aboutUsBanner">Meet The Developers</p>
      </div>

      <div className="card-container">
        <div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div class="profileImg">
                  <i class="fas fa-user-circle" aria-hidden="true" />
                </div>
                <p>Marcus Galvin</p>
                <br />
                <p>Full Stack Web Developer</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
              </div>
              <div className="flip-card-back">
                <h1>Carlton Fisk</h1>
                <p>Front-end Enthusiast</p>
                <br />
                <p>Specializes in</p>
                <li>ReactJS</li>
                <li>JavaScript</li>
                <li>C++</li>
              </div>
            </div>
          </div>
        </div>
        {/* ############################## */}
      </div>
    </Fragment>
  );
};

export default AboutUs;
