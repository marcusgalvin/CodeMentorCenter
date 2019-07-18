import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Fragment>
      <div className="register-ct">
        <h3>Create a New User Profile</h3>
        <p className="lead">
          <i className="fas fa-user" /> Please create a user profile below to
          begin using the Code Mentor Center mentorship program.
        </p>
        <form className="form">
          <div className="form-group">
            <input type="text" placeholder="Name" name="name" />
            <small className="form-text">Enter First & Last Name</small>
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email Address" name="email" />
            <small className="form-text">
              We will use this email to send and receive mentorship
              notifications
            </small>
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" name="password" />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Register" />
        </form>
        <p className="my-1">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </div>
    </Fragment>
  );
};

export default Register;
