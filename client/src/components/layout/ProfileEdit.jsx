import React, { Fragment } from "react";
import { Link } from "react-router-dom";

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
          <div className="menteeForm-ct">
            <div className="personalInfo">
              <div className="form-group">
                <p>
                  <input
                    type="checkbox"
                    name="menteeSignUp"
                    value="menteeSignUp"
                  />{" "}
                  <strong> I'm looking for help from a CMC mentor.</strong>
                </p>
              </div>
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
          <p className="mentorSelect">
            Our goal is to ensure that you have the best learning experience
            possible. We thought that other tutoring companies weren’t providing
            a level of service to justify their price tag. This meant designing
            a platform where tutors and students could connect with each other.
            We wanted to give students more options in order for them to match
            with their perfect tutor. You no longer need to spend countless
            hours finding a tutor, you can spend that time in the classroom. And
            the more time you spend learning, the happier we are.
            <br />
            <br />
            Become a mentor today and help the programming community...one
            programmer at a time.
          </p>
          <div className="mentorSignUp">
            <input type="checkbox" id="mentorViewMore" />
            <h3>
              <label for="mentorViewMore">View More on Mentorship</label>
            </h3>
            <div className="hiddenMentorFields">
              <input type="checkbox" className="beMentor" /> Please Sign me up
              to become a CMC mentor
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Programming language..."
                  name="progLang"
                />
                <small className="form-text">
                  Please indicate a programming language to mentor.
                </small>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Level of expertise..."
                  name="progKnowledge"
                />
                <small className="form-text">
                  Please rate your experience 1-10
                </small>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Spoken language..."
                  name="speakLang"
                />
                <small className="form-text">
                  Please rate your experience 1-10
                </small>
              </div>
              <div className="form-group">
                <textarea placeholder="Bio..." name="bio" />
                <small className="form-text">
                  Please give a brief bio about yourself.
                </small>
              </div>
            </div>
          </div>
          <div className="profileBtns">
            <input type="submit" className="btn btn-primary my-1" />
            <Link className="btn btn-light my-1" to="/dashboard">
              Go Back
            </Link>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default ProfileEdit;
