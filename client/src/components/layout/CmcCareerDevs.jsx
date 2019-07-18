import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import cmcNavLogo from "../images/logo_cmcNavbar.png";

const CmcCareerDevs = () => {
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

        <div className="info-container">
          <div className="CMC-left">
            <div className="CMC-photo">
              <img src={require("../images/cmc 600x200.png")} />
            </div>
            <p>
              Code Mentor Centor is your gateway into a successful career in
              computer science & programming. After spending time learning the
              basic fundamentals of JavaScript with your mentor, you can
              continue your education at CareerDevs Computer Science University.
              CareerDevs is the Best Coding and Web Development Opportunity on
              the Planet! If You Are Hired Into Our Paid Internship After Six
              Months, We Cancel Your Remaining Balance. Its Yours!
            </p>
          </div>
          <div className="CMC-right">
            <div className="CareerDevs-photo">
              <img src={require("../images/CareerDevs-Logo-600x200.jpg")} />
            </div>
            <br />
            <p>
              CareerDevs is a year-long, full-stack program for students looking
              to kickstart their careers in computer science. We are committed
              to the belief that an education worth our students time is one
              that teaches students the powerful skills needed to thrive in
              today’s economy without incurring the crushing student debts
              affecting Americans today. Guaranteed Full-Time Job Placement
              After Graduation, Earning $50,000 – $90,000 New Classes Start
              Every Two Months Take Classes Online From Anywhere in the World!
            </p>
          </div>
        </div>
      </div>
      <div className="right-info">
        <div className="lightbulb-photo">
          <img src={require("../images/lightbulb.png")} />
        </div>
        <div className="mission-statement">
          <h2>Our Mission Statement: Teach People Powerful Things</h2>
        </div>
      </div>
      <br />
      <br />
      <div className="what-you-learn">
        <p>
          <h2>What You Will Learn </h2>
          <br />
          <li>
            Introduction to website development and programming (4 months): We
            start from the very beginning. We take it slowly, allowing you to
            learn without being overwhelmed. In addition to being able to ask
            your instructors questions, every CareerDevs student also receives a
            mentor (a student from Intermediate or Advanced), whom you can ask
            questions. By the end of the Introduction phase, you’ve built your
            first full-stack application. Also, your friends now think you’re
            weird. 🙂
          </li>{" "}
          <br />
          <li>
            Intermediate website development and programming (4 months). After
            completing the Introduction phase, you will have built up your
            confidence. You are now ready to learn more full-stack computer
            science concepts and build more robust websites and software
            programs. You are also eating algorithms for breakfast, building
            API’s, mastering recursion and can consider yourself an
            object-oriented developer. Most Impressive!
          </li>{" "}
          <br />
          <li>
            Advanced website development and programming (4 months). Yes, you
            are here now. You are now learning to master the most advanced,
            cutting edge & real-world software development concepts. You have
            developed several full-stack milestone software projects and a
            capstone project that would impress Bill Gates. Oh, by the way… you
            are also earning $50,000 to $80,000 per year. No joke. It’s ok. Tell
            your friends and family… you’re not bragging, you worked hard for
            this.
          </li>
          <br />
        </p>
      </div>
      <div className="languages">
        {/* link to html */}
        <div className="seperate-language">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
            className="html"
          >
            <img src={require("../images/HTML5.png")} />
          </a>
        </div>
        {/* link to javascript */}
        <div className="seperate-language">
          <a href="https://www.javascript.com/" className="javascript">
            <img src={require("../images/JavaScript-logo.png")} />
          </a>
        </div>
        {/* link to node */}
        <div className="seperate-language">
          <a href="https://nodejs.org/en/" className="node">
            <img src={require("../images/node.png")} />
          </a>
        </div>
        {/* link to mongoDB */}
        <div className="seperate-language">
          <a href="https://www.mongodb.com/" className="mongodb">
            <img src={require("../images/mongoDB.png")} />
          </a>
        </div>
        {/* link to c++ */}
        <div className="seperate-language">
          <a
            href="https://www.geeksforgeeks.org/c-plus-plus/"
            className="cplusplus"
          >
            <img src={require("../images/c-plus-plus-logo.png")} />
          </a>
        </div>
        {/* link to c-sharp */}
        <div className="seperate-language">
          <a
            href="https://en.wikipedia.org/wiki/C_Sharp_(programming_language)"
            className="csharp"
          >
            <img src={require("../images/c-sharp.png")} />
          </a>
        </div>
        {/* link to java */}
        <div className="seperate-language">
          <a href="https://www.java.com/en/" className="java">
            <img src={require("../images/java.jpg")} />
          </a>
        </div>
        {/* link to aws */}
        <div className="seperate-language">
          <a href="https://aws.amazon.com/" className="aws">
            <img src={require("../images/aws.png")} />
          </a>
        </div>
        {/* link to agile */}
        <div className="seperate-language">
          <a href="https://linchpinseo.com/the-agile-method/" className="agile">
            <img src={require("../images/agile.jpg")} />
          </a>
        </div>

        {/* link to github */}
        <div className="seperate-language">
          <a href="https://github.com/" className="github">
            <img src={require("../images/github.png")} />
          </a>
        </div>
      </div>

      <br />

      <Footer />
    </Fragment>
  );
};

export default CmcCareerDevs;
