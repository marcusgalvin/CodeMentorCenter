import React, { Component } from "react";
import { Link } from "react-router-dom";
import cmcNavLogo from "../images/logo_cmcNavbar.png";

class Navbar extends Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar bg-white">
          <div className="logo">
            <Link to="/">
              <img src={cmcNavLogo} alt="Code Mentor Center" />
            </Link>
          </div>
          <ul>
            <li>
              <Link to="/mentors">MENTORS</Link>
            </li>
            <li>
              <Link to="/mentees">MENTEES</Link>
            </li>
            <li>
              <Link to="/createProfile">CREATE PROFILE</Link>
            </li>

            <li>
              <a href="/" className="nav-link">
                LOGOUT
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
