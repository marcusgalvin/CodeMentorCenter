import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const CTARegister = () => {
  return (
    <Fragment>
      <div className="ctaRegister">
        <h4 className="lead">
          Making software stronger...one developer at a time.
        </h4>
        <div className="my-2">
          <Link to="/register" className="btn btn-primary btn-rounded">
            REGISTER
          </Link>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur
          adipisicing elit, sed labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in vo
        </p>
      </div>
    </Fragment>
  );
};

export default CTARegister;
