import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const CTARegister = () => {
  return (
    <Fragment>
      <div className="ctaRegister">
        <h4 className="lead">
          Making software stronger... one developer at a time.
        </h4>
        <p>
          We've added a mentorship program to CodeMentorCenter so you can build
          skills and share knowledge with another member of our community.
        </p>
        <p>
          Here's how the program works: You sign up, match yourself with a
          mentor or mentee, and get helpful conversation starters each week so
          you get to know what each person has to offer or wants to learn. We
          recommend that mentors spend 15 to 30 minutes with a group of 2 to 5
          mentees once or twice per week via Zoom/Hangouts/Slack, etc. We will
          provide mentors with an outline of topics to cover. Mentorships last
          for one month.
        </p>
        <p>
          After that, they can start a new mentorship (for free) or they can
          enroll in the CareerDevs Computer Science University for no cost up
          front. Mentees are guaranteed to receive a $50,000 - $80,000 salary
          job after they graduate CareerDevs. Mentors can earn $300 for every 5
          of the mentees who enroll in CareerDevs and complete two months.
          Exelsior!
        </p>
        <p className="my-1">
          <strong>
            Try it out today! There's a mentor waiting to help you.
          </strong>
        </p>
        <div className="my-1">
          <Link to="/register" className="btn btn-primary btn-rounded">
            REGISTER
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default CTARegister;
