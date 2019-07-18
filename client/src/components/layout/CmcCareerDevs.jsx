import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import cmcNavLogo from "../images/logo_cmcNavbar.png";

const OnlineLearning = () => {
  return (
    <Fragment>
      <div className="cmc-ct">
        <div className="mission-statement">
          <p>Looking To Further Your Mentorship?</p>
        </div>
        <div>
          <p>Look No Further Than Career Devs Computer Science University</p>
        </div>
        <br />
        <br />

        <div className="photo-ct">
          <div className="CMC-photo">
            <img src={cmcNavLogo} alt="Code Mentor Center" />
          </div>

          <div className="CareerDev-photo">
            <img src={require("../images/CareerDevs-Logo-600x200.jpg")} />
          </div>
        </div>

        <div className="middle-info">
          <div className="left-info">
            <p>
              Code Mentor Centor is your gateway into a successful career in
              computer science & programming. After spending time learning the
              basic fundamentals of JavaScript with your mentor, you are able to
              continue your education at Career Devs Computer Science
              University. Career Devs is the Best Coding and Web Development
              Opportunity on the Planet! If You Are Hired Into Our Paid
              Internship After Six Months, We Cancel Your Remaining Balance. Its
              Yours!
            </p>
          </div>
          <div className="right-info">
            <p>
              CareerDevs is a year-long, full-stack program for students looking
              to kickstart their careers in computer science. We are committed
              to the belief that an education worth our students time is one
              that teaches students the powerful skills needed to thrive in
              today’s economy without incurring the crushing student debts
              affecting Americans today. Guaranteed Full-Time Job Placement
              After Graduation, Earning $50,000 – $90,000
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="students">
        <h2>
          Here Are Just A Few of Our Employed Grads! Each graduate began a new
          career earning between $50,000 to $90,000! If you don’t do the same
          within 5 months after graduating you don’t pay us anything.
        </h2>
        <br />
        <div className="student-photos-ct">
          <div className="single-student">
            <img src={require("../images/EmitonAlves.png")} />
            <p>Emiton Alves</p>
            <p>Software Engineer</p>
          </div>
          <div className="single-student">
            <img src={require("../images/RebeccaWagaman.jpg")} />
            <p>Rebecca Wagaman</p>
            <p>Software Engineer</p>
          </div>
          <div className="single-student">
            <img src={require("../images/MichaelDAntuono.jpg")} />
            <p>Michael DAntuono</p>
            <p>Software Engineer</p>
          </div>
          <div className="single-student">
            <img src={require("../images/JamalDawson.jpg")} />
            <p>Jamal Dawson</p>
            <p>Software Engineer</p>
          </div>
        </div>
      </div>{" "}
      <br />
      }
      <Footer />
    </Fragment>
  );
};

export default OnlineLearning;
