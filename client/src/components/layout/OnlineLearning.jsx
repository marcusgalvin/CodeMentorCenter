import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const OnlineLearning = () => {
  return (
    <Fragment>
      <div className="higherLearning">
        <div className="ad-img">
          <img src={require("../images/cd_higher_learning.jpg")} />
        </div>
        <div className="ad-copy">
          <h4>Looking to further your mentorship?</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed labore et dolore magna aliqua.
          </p>
          <Link to="/CmcCareerDevs" className="btn btn-primary btn-rounded">
            EXPLORE ONLINE LEARNING
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default OnlineLearning;
