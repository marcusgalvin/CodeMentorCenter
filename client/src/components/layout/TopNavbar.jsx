import React, { Component } from "react";
import { Link } from "react-router-dom";
import cmcNavLogo from "../images/logo_cmcNavbar.png";
import isAuthenticated from "../../Auth/isAuthenticated";

class Navbar extends Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar">
          <div className="logo">
            <Link to="/">
              <img src={cmcNavLogo} alt="Code Mentor Center" />
            </Link>
          </div>
          <ul>
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
              <Link to="/createProfile">
                <i className="far fa-address-card fas" /> CREATE PROFILE
              </Link>
            </li>
            {!isAuthenticated() && (
              <li>
                <Link to="/login" className="nav-link">
                  <i className="fas fa-sign-in-alt" />
                  LOGIN
                </Link>
              </li>
            )}
            {isAuthenticated() && (
              <li>
                <Link to="/logout" className="nav-link">
                  <i className="fas fa-sign-out-alt" />
                  LOGOUT
                </Link>
              </li>
            )}
            <li>
              <Link to="/" className="nav-link">
                <i className="fas fa-sign-out-alt" /> LOGOUT
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
