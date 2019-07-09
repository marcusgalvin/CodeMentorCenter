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
<<<<<<< HEAD
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
=======
          <div class="m-nav">
            <input class="menu-btn" type="checkbox" id="menu-btn" />
            <label class="menu-icon" for="menu-btn">
              <span class="navicon" />
            </label>
            <ul class="menu">
              <li>
                <Link to="/mentors">
                  <i class="fas fa-user-ninja" /> MENTORS
                </Link>
              </li>
              <li>
                <Link to="/mentees">
                  <i class="fas fa-user" /> MENTEES
                </Link>
              </li>
              <li>
                <Link to="/createProfile">
                  <i class="far fa-address-card fas" /> CREATE PROFILE
                </Link>
              </li>
              <li>
                <Link to="/" className="nav-link">
                  <i class="fas fa-sign-out-alt" /> LOGOUT
                </Link>
              </li>
            </ul>
          </div>
>>>>>>> 83311d5ce3cbda5118f2421026d4230deed1c477
        </nav>
      </div>
    );
  }
}

export default Navbar;
