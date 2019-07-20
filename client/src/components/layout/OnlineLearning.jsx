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
            Code Mentor Centor is your gateway into a successful career in
            computer science & programming. After spending time learning the
            basic fundamentals of JavaScript with your mentor, you can continue
            your education at CareerDevs Computer Science University!
          </p>
          <Link
            to="/OnlineLearningDetails"
            className="btn btn-primary btn-rounded"
          >
            EXPLORE ONLINE LEARNING
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default OnlineLearning;
