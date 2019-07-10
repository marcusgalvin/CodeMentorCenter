import React, { Component } from "react";
import { Link } from "react-router-dom";
import cmcNavLogo from "../images/logo_cmcNavbar.png";

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
          <div class="m-nav">
            <input class="menu-btn" type="checkbox" id="menu-btn" />
            <label class="menu-icon" for="menu-btn">
              <p>Menu</p>
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
        </nav>
      </div>
    );
  }
}

export default Navbar;
