import React, { Fragment } from "react";
import heroBanner from "../images/hero_bannerCMCCouple.jpg";

const HeroBanner = () => {
  return (
    <Fragment>
      <div className="heroImg">
        <img
          src={heroBanner}
          alt="Code Mentor Center | Making software stronger...one developer at a time."
        />
      </div>
    </Fragment>
  );
};

export default HeroBanner;
