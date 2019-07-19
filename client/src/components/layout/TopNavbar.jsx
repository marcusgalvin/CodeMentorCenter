import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

//img import
import cmcNavLogo from "../images/logo_cmcNavbar.png";

const Navbar = ({ logout, auth: { isAuthenticated, loading } }) => {
  const authLinks = (
    <ul className="menu">
      <li>
        <Link to="/mentors">
          <i className="fas fa-user-ninja" /> MENTORS
        </Link>
      </li>
      <li>
        <Link to="/mentees">
          <i className="fas fa-user" /> MENTEES
        </Link>
      </li>
      <li>
        <Link to="/dashboard">
          <i className="far fa-address-card fas" /> PROFILE
        </Link>
      </li>
      <li>
        <a className="nav-link" href="#!" onClick={logout}>
          <i className="fas fa-sign-out-alt" /> LOGOUT
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className="menu">
      <li>
        <Link to="/mentors">
          <i className="fas fa-user-ninja" /> MENTORS
        </Link>
      </li>
      <li>
        <Link to="/mentees">
          <i className="fas fa-user" /> MENTEES
        </Link>
      </li>
      <li>
        <Link to="/register">
          <i className="far fa-registered fas" /> REGISTER
        </Link>
      </li>
      <li>
        <Link to="/login" className="nav-link">
          <i className="fas fa-sign-out-alt" /> LOGIN
        </Link>
      </li>
    </ul>
  );

  return (
    <div className="container">
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={cmcNavLogo} alt="Code Mentor Center" />
          </Link>
        </div>
        <div className="m-nav">
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <p>Menu</p>
            <span className="navicon" />
          </label>
          {!loading && (
            <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
          )}
        </div>
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
