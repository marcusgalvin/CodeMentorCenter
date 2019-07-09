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
              <i class="fas fa-user-ninja" />
              <Link to="/mentors">MENTORS</Link>
            </li>
            <li>
              <i class="fas fa-user" />
              <Link to="/mentees">MENTEES</Link>
            </li>
            <li>
              <i class="far fa-address-card fas" />
              <Link to="/createProfile">CREATE PROFILE</Link>
            </li>
            <li>
              <i class="fas fa-sign-out-alt" />
              <Link to="/" className="nav-link">
                LOGOUT
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
