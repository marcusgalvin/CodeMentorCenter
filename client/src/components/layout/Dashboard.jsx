import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <Fragment>
      <div className="dash-alerts-bands">
        <i className="fas fa-user" /> Welcome John Doe
        <div className="dashNav">
          <div className="onlineStatus">
            <i class="fas fa-toggle-on success" /> Mentor Status:{" "}
            <span>Online</span>
          </div>
          <Link to="/profileedit" class="edit">
            <i class="fas fa-user-circle" /> Edit Profile
          </Link>
          <button className="delete">
            <i className="fas fa-user-minus" /> Delete My Account
          </button>
        </div>
        <div className="requestAlert">
          <i class="fas fa-envelope-open-text" /> You have a pending mentorship
          request below!
        </div>
      </div>
      <div className="dashProfileSummary">
        <div className="basic profileSummary">
          <h2>Basic Profile Information</h2>
          <div className="profileImg">
            <i class="fas fa-user-circle" />
          </div>
          <p>
            <strong>John Doe</strong>
          </p>
          <p>
            <strong>jdoe123</strong>
          </p>
          <ul>
            <li>
              <i class="fab fa-facebook-square" />{" "}
              <a href="http://wwww.facebook.com"> Facebook: jdoe</a>
            </li>
            <li>
              <i class="fab fa-twitter-square" />{" "}
              <a href="http://wwww.facebook.com"> Twitter: johndoe</a>
            </li>
            <li>
              <i class="fab fa-linkedin" />{" "}
              <a href="http://wwww.facebook.com"> LinkedIn: JohnPaulDoe</a>
            </li>
            <li>
              <i class="fab fa-github-square" />{" "}
              <a href="http://wwww.facebook.com"> Github: JohnGithubRepos</a>
            </li>
          </ul>
          <hr />
          <p className="menteeHelp">
            Helped Mentees: <span>5</span>
          </p>
          <p className="mentoredHelp">
            Mentored by another: <span>10</span>
          </p>
        </div>
        <div className="detail profileSummary">
          <h2>Detailed Profile Information</h2>
          <ul>
            <li>
              <strong>Company:</strong> USA Company Inc.
            </li>
            <li>
              <strong>School:</strong> UMASS
            </li>
            <li>
              <strong>Studied:</strong> Computer Science
            </li>
            <li>
              <strong>Location:</strong> Providence, RI
            </li>
            <li>
              <strong>Country:</strong> United States
            </li>
            <li>
              <strong>Bio:</strong> John Doe is a Professor in Computer Science
              at the University of Washington. He received his Ph.D. from the
              University of Pennsylvania in 1995, was a principal member of the
              technical staff at AT&T Labs and joined the University of
              Washington in 2000. Suciu is conducting research in data
              management, with an emphasis on topics related to Big Data and
              data sharing, such as probabilistic data, data pricing, parallel
              data processing, data security.
            </li>
          </ul>
        </div>
        <div className="mentorDashboard">
          <h2>Mentorship Requests</h2>
          <div className="requestedMentorship">
            <ul>
              <li>
                <strong>User:</strong> Paul Jones
              </li>
              <li>
                <strong>Languages:</strong> JavaScript, HTML, CSS
              </li>
              <li>
                <strong>Request Summary:</strong>
                Hello, it seems that your skills would be a perfect fit for what
                I'm trying learn on the road to becoming a software engineer.
                Hope you can help. Thanks Paul.
              </li>
              <li>
                <button className="btn btn-success">Accept</button>
                <button className="btn btn-danger">Deny</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
