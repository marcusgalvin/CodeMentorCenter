import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

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
        <div className="CareerDev-photo">
          <img src={require("../images/CareerDevs-Logo-600x200.jpg")} />
        </div>
        <br />
        <div className="career-devs-info">
          {/* <div className="left-info"> */}
          <p>
            <br />
            CareerDevs is a year-long, full-stack program for students looking
            to kickstart their careers in computer science. We are committed to
            the belief that an education worth our students time is one that
            teaches students the powerful skills needed to thrive in today’s
            economy without incurring the crushing student debts affecting
            Americans today. CareerDevs students graduate with an in-depth
            understanding of and practical experience with a smorgasbord of the
            most in-demand technologies in the job market today including C#,
            Python, JavaScript, Java, C, SQL, object-oriented programming,
            functional programming, Node.js, React, Redux, React Native, HTML
            and CSS. Beyond these specific technologies, CareerDevs also trains
            students to be resourceful problem-solvers by approaching problems
            as computer scientists. We don’t just train you what you need to
            know; we train you how to think, setting you up for a lifetime of
            success beyond the CareerDevs classroom.
          </p>
          {/* </div> */}
          {/* <div className="right-info">
            <p>
              <br />
              The Best Coding and Web Development Opportunity on the Planet If
              You Are Hired Into Our Paid Internship After Six Months, We Cancel
              Your Remaining Balance (Paid Internship Earning Potential: $1,000
              – $2,000 per month – never to be repaid. It’s yours!) Guaranteed
              Full-Time Job Placement After Graduation, Earning $50,000 –
              $90,000
            </p>
          </div> */}
        </div>
        <br />
        <br />
        <div className="students">
          <h1>
            Here Are Just A Few of Our Employed Grads! Each graduate began a new
            career earning between $50,000 to $90,000! If you don’t do the same
            within 5 months after graduating you don’t pay us anything.
          </h1>
          <div className="student-photos">
            <img src={require("../images/EmitonAlves.png")} />
            <p>Emiton Alves Software Engineer</p>
            <img src={require("../images/RebeccaWagaman.jpg")} />
          </div>
        </div>
        <br />
        <br />

        <div className="what-you-learn">
          <p>
            <h2>What You Will Learn</h2>
            <li>
              Introduction to website development and programming (4 months): We
              start from the very beginning. We take it slowly, allowing you to
              learn without being overwhelmed. In addition to being able to ask
              your instructors questions, every CareerDevs student also receives
              a mentor (a student from Intermediate or Advanced), whom you can
              ask questions. By the end of the Introduction phase, you’ve built
              your first full-stack application. Also, your friends now think
              you’re weird. 🙂
            </li>{" "}
            <li>
              Intermediate website development and programming (4 months). After
              completing the Introduction phase, you will have built up your
              confidence. You are now ready to learn more full-stack computer
              science concepts and build more robust websites and software
              programs. You are also eating algorithms for breakfast, building
              API’s, mastering recursion and can consider yourself an
              object-oriented developer. Most Impressive!
            </li>{" "}
            <li>
              dvanced website development and programming (4 months). Yes, you
              are here now. You are now learning to master the most advanced,
              cutting edge & real-world software development concepts. You have
              developed several full-stack milestone software projects and a
              capstone project that would impress Bill Gates. Oh, by the way…
              you are also earning $50,000 to $80,000 per year. No joke. It’s
              ok. Tell your friends and family… you’re not bragging, you worked
              hard for this.
            </li>
            A
          </p>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default OnlineLearning;
