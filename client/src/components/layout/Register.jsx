import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";

//instead of passing props in, destructure the props to get only setAlert
const Register = ({ setAlert, register, isAuthenticated }) => {
  //formData will be the same as state = { formData: "" }
  //setformdata will be the this.setState({formData: values})
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      const newUser = {
        name,
        email,
        password,
        password2
      };
      register(newUser);
    }
  };

  //redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <div className="register-ct">
        <h3>Create a New User Profile</h3>
        <p className="lead">
          <i className="fas fa-user" /> Please create a user profile below to
          begin using the Code Mentor Center mentorship program.
        </p>
        <form className="form" onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={e => onChange(e)}
              autoComplete="name"
              required
            />{" "}
            <small className="form-text">Enter First & Last Name</small>
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={e => onChange(e)}
              autoComplete="email"
              required
            />{" "}
            <small className="form-text">
              We will use this email to send and receive mentorship
              notifications
            </small>
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={e => onChange(e)}
              value={password}
              minLength="6"
              autoComplete="new-password"
              required
            />{" "}
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              onChange={e => onChange(e)}
              value={password2}
              minLength="6"
              autoComplete="new-password"
              required
            />
          </div>
          <input
            type="submit"
            className="btn btn-rounded btn-primary"
            value="Register"
          />
        </form>
        <p className="my-1">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </div>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { setAlert, register }
)(Register);
