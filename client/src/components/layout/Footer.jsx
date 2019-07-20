import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Fragment>
      <div className="footer-ct">
        <div className="social-ct">
          <h4>Follow Us</h4>
          <ul>
            <li>
              <a href="http://wwww.facebook.com">
                <i className="fab fa-facebook-square" /> Facebook
              </a>
            </li>
            <li>
              <a href="http://www.twitter.com">
                <i className="fab fa-twitter-square" /> Twitter
              </a>
            </li>
          </ul>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="location-ct">
          <h4>Campus</h4>
          <p>
            <strong>Rhode Island:</strong>
            <br />
            Providence:
            <br />
            100 Niantic Avenue,
            <br />
            Providence, RI 02907
            <br />
          </p>
        </div>
        <div className="sitemap-ct">
          <h4>Explore Our Site</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Mentors">Mentors</Link>
            </li>
            <li>
              <Link to="/Mentees">Mentees</Link>
            </li>
            <li>
              <Link to="/AboutUs">About Us</Link>
            </li>
            <li>
              <Link to="/OnlineLearningDetails">CareerDevs</Link>
            </li>
          </ul>
        </div>
        <p className="copyright">
          &copy; 2019 CareerDevs Computer Science University
          <br />
          <span>
            Designed & developed by the students of <strong>cohort 7</strong>
          </span>
        </p>
      </div>
    </Fragment>
  );
};

export default Footer;
