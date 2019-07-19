import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

{
  /* This style brings the content below the fixed header */
}
const footerDiv = {
  marginTop: "108px"
};

const ProfileEdit = () => {
  return (
    <Fragment>
      <div className="editProfile-ct">
        <h3>Create / Edit Your CMC Profile</h3>
        <p className="lead">
          <i className="fas fa-user" /> Please fill out the information below to
          become part of the CMC family.
        </p>
        {/* <p className="fieldRequired">
          <i class="fas fa-star-of-life" /> = required field
        </p> */}
        <form className="form">
          {/* Standard profile registration form */}
          <div className="menteeForm-ct">
            <div className="personalInfo">
              <div className="form-group">
                <input type="text" placeholder="Company" name="company" />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="University / School / Bootcamp"
                  name="school"
                />
              </div>
              <div className="form-group location">
                <input type="text" placeholder="City" name="City" />
                <select>
                  <option value="">State</option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="DC">District Of Columbia</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </select>
                <input type="text" placeholder="Country" name="Country" />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Github Latest Repo"
                  name="githubusername"
                />
                <small className="form-text">Add your latest Github repo</small>
              </div>
              <div className="form-group">
                <textarea placeholder="Bio" name="bio" />
              </div>
            </div>
            <div className="socialInfo">
              <div className="form-group social-input">
                <i className="fab fa-twitter fa-2x" />
                <input type="text" placeholder="Twitter URL" name="twitter" />
              </div>

              <div className="form-group social-input">
                <i className="fab fa-facebook fa-2x" />
                <input type="text" placeholder="Facebook URL" name="facebook" />
              </div>

              <div className="form-group social-input">
                <i className="fab fa-youtube fa-2x" />
                <input type="text" placeholder="YouTube URL" name="youtube" />
              </div>

              <div className="form-group social-input">
                <i className="fab fa-linkedin fa-2x" />
                <input type="text" placeholder="Linkedin URL" name="linkedin" />
              </div>

              <div className="form-group social-input">
                <i className="fab fa-instagram fa-2x" />
                <input
                  type="text"
                  placeholder="Instagram URL"
                  name="instagram"
                />
              </div>
            </div>
          </div>
          {/* Mentee sign up form */}
          <div className="menteeSignUp">
            <h3>Looking for mentorship?</h3>
            <p>
              You've come to the right place for help and guidance on furthering
              your education in pursing the right programming career. Please use
              the form below to tell us a little more on what you are looking
              for help in. Mentors will use this information to see if they are
              the right fit with your needs.
            </p>
            <div className="form-group">
              <input type="checkbox" name="menteeSignUp" value="menteeSignUp" />{" "}
              <strong> I'm looking for a mentor</strong>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Language of interest?"
                  name="progLang"
                />
                <small className="form-text">Language of interest?</small>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Speaking language..."
                  name="speakLang"
                />
                <small className="form-text">
                  What languages do you speak?
                </small>
              </div>
              <div className="form-group">
                <textarea placeholder="What brought you to CMC?" name="bio" />
                <small className="form-text">
                  What are you interested in learning?
                </small>
              </div>
            </div>
          </div>
          {/* Mentor sign up form */}
          <div className="mentorSignUp">
            <h3>Become a CMC mentor</h3>
            <p>
              Our goal is to ensure that you have the best learning experience
              possible. We felt other tutoring sites weren’t providing a level
              of service that should be giving. This meant designing a platform
              where mentors and mentees could connect with each other. We wanted
              to give visitors more options in order for them to match with
              their perfect mentor. You no longer need to spend countless hours
              finding a mentor, you can spend that time learning. And the more
              time you spend learning, the happier we are.
              <br />
              <br />
              Become a mentor today and help the programming community... one
              programmer at a time.
            </p>
            <input type="checkbox" id="mentorViewMore" />
            <h3>
              Click Here <i class="fas fa-user-ninja" /> Learn More
            </h3>
            {/* Hidden mentor fields */}
            <div className="hiddenMentorFields">
              <input type="checkbox" className="beMentor" />{" "}
              <strong>Please sign me up as a mentor</strong>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Programming language..."
                  name="progLang"
                />
                <small className="form-text">
                  Please indicate a programming language to mentor in
                </small>
              </div>
              <div className="form-group">
                <select>
                  <option value="">Rate your experience level</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
                <small className="form-text">
                  Please rate your experience 1-10?
                </small>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Speaking language..."
                  name="speakLang"
                />
                <small className="form-text">
                  What languages do you speak?
                </small>
              </div>
              <div className="form-group">
                <textarea placeholder="I can mentor in..." name="bio" />
                <small className="form-text">
                  Please share your area of interest on being a mentor.
                </small>
              </div>
            </div>
          </div>
          <div className="profileBtns">
            <input type="submit" className="btn btn-rounded btn-primary my-1" />
            <Link className="btn btn-rounded btn-light my-1" to="/dashboard">
              Go Back
            </Link>
          </div>
        </form>
      </div>
      <div style={footerDiv}>
        <Footer />
      </div>
    </Fragment>
  );
};

export default ProfileEdit;
