import React, { Fragment } from "react";
import Footer from "./Footer";

{
  /* This style brings the content below the fixed header */
}
const footerDiv = {
  marginTop: "140px"
};

const OnlineLearningDetails = () => {
  return (
    <Fragment>
      <div className="onlineLearningDetails-ct">
        <h2>Looking To Further Your Mentorship?</h2>
        <h4>Look No Further Than Career Devs Computer Science University</h4>
        <p className="lead">Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.</p>
        <p className="lead">Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.</p>
          <div className="programs-ct">
            <div className="program-details">
              <div className="logo">
                <img src={require("../images/cmc_600x200.png")} />
              </div>
              <h4>Code Mentor Center</h4>
              <p>
                Code Mentor Centor is your gateway into a successful career in
                computer science & programming. After spending time learning the
                basic fundamentals of JavaScript with your mentor, you can
                continue your education at CareerDevs Computer Science
                University. CareerDevs is the Best Coding and Web Development
                Opportunity on the Planet! If You Are Hired Into Our Paid
                Internship After Six Months, We Cancel Your Remaining Balance.
                Its Yours!
              </p>
            </div>
            <div className="program-details">
              <div className="logo">
                <img src={require("../images/CareerDevs-Logo-600x200.jpg")} />
              </div>
              <h4>CareerDevs Computer Science University</h4>
              <p>
                CareerDevs is a year-long, full-stack program for students
                looking to kickstart their careers in computer science. We are
                committed to the belief that an education worth our students
                time is one that teaches students the powerful skills needed to
                thrive in today’s economy without incurring the crushing student
                debts affecting Americans today. Guaranteed Full-Time Job
                Placement After Graduation, Earning $50,000 – $90,000 New
                Classes Start Every Two Months Take Classes Online From Anywhere
                in the World!
              </p>
            </div>
          </div>
        <div className="about-cd">
          <div className="lightbulb-photo">
            <img src={require("../images/lightbulb.png")} />
          </div>
          <h2>CareerDevs Computer Science University</h2>
          <h4>Our Mission Statement: Teach People Powerful Things</h4>
        </div>
        <div className="studies">
            <h2>Focusing on what matters!</h2>
            <ul>
            <li>
              <strong>Introduction</strong> to website development and programming (4 months): We
              start from the very beginning. We take it slowly, allowing you to
              learn without being overwhelmed. In addition to being able to ask
              your instructors questions, every CareerDevs student also receives
              a mentor (a student from Intermediate or Advanced), whom you can
              ask questions. By the end of the Introduction phase, you’ve built
              your first full-stack application. Also, your friends now think
              you’re weird. 🙂
            </li>
            <li>
              <strong>Intermediate</strong> website development and programming (4 months). After
              completing the Introduction phase, you will have built up your
              confidence. You are now ready to learn more full-stack computer
              science concepts and build more robust websites and software
              programs. You are also eating algorithms for breakfast, building
              API’s, mastering recursion and can consider yourself an
              object-oriented developer. Most Impressive!
            </li>
            <li>
              <strong>Advanced</strong> website development and programming (4 months). Yes, you
              are here now. You are now learning to master the most advanced,
              cutting edge & real-world software development concepts. You have
              developed several full-stack milestone software projects and a
              capstone project that would impress Bill Gates. Oh, by the way…
              you are also earning $50,000 to $80,000 per year. No joke. It’s
              ok. Tell your friends and family… you’re not bragging, you worked
              hard for this.
            </li>
            </ul>
        </div>
        <div className="programs-ct">
          {/* link to html */}
          <div className="program-ct">
            <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" target="_blank">
              <img src={require("../images/HTML5.png")} />
            </a>
          </div>
          {/* link to javascript */}
          <div className="program-ct">
            <a href="https://www.javascript.com/" target="_blank">
              <img src={require("../images/JavaScript-logo.png")} />
            </a>
          </div>
          {/* link to node */}
          <div className="program-ct">
            <a href="https://nodejs.org/en/" target="_blank">
            <img src={require("../images/node.png")} />
            </a>
          </div>
          {/* link to mongoDB */}
          <div className="program-ct">
            <a href="https://www.mongodb.com/" target="_blank">
              <img src={require("../images/mongoDB.png")} />
            </a>
          </div>
          {/* link to c++ */}
          <div className="program-ct">
            <a href="https://www.geeksforgeeks.org/c-plus-plus/" target="_blank">
              <img src={require("../images/c-plus-plus-logo.png")} />
            </a>
          </div>
          {/* link to c-sharp */}
          <div className="program-ct">
            <a href="https://en.wikipedia.org/wiki/C_Sharp_(programming_language)" target="_blank">
              <img src={require("../images/c-sharp.png")} />
            </a>
          </div>
          {/* link to java */}
          <div className="program-ct">
            <a href="https://www.java.com/en/" target="_blank">
              <img src={require("../images/java.jpg")} />
            </a>
          </div>
          {/* link to aws */}
          <div className="program-ct">
            <a href="https://aws.amazon.com/" target="_blank">
              <img src={require("../images/aws.png")} />
            </a>
          </div>
          {/* link to agile */}
          <div className="program-ct">
            <a href="https://linchpinseo.com/the-agile-method/" target="_blank">
              <img src={require("../images/agile.jpg")} />
            </a>
          </div>

          {/* link to github */}
          <div className="program-ct">
            <a href="https://github.com/" target="_blank">
              <img src={require("../images/github.png")} />
            </a>
          </div>
        </div>
      </div>
      <div style={footerDiv}>
        <Footer />
      </div>{" "}
    </Fragment>
  );
};

export default OnlineLearningDetails;
