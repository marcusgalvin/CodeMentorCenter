import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Dashboard = () => {
  return (
    <Fragment>
      <div className="dash-alerts-bands">
        <i className="fas fa-user" /> Welcome John Doe
        <div className="dashNav">
          {/* Indicator to show if mentor is available. Uses checkbox:mentorStatus on edit profile form */}
          <div className="onlineStatus">
            Mentor Status: <span>Online</span>
          </div>
          <Link to="/profileedit" className="edit">
            <i className="fas fa-user-circle" /> Edit Profile
          </Link>
          <button className="delete">
            <i className="fas fa-user-minus" /> Delete My Account
          </button>
        </div>
        {/* Request alert band is triggered if a user is rquesting mentorship */}
        <div className="requestAlert">
          <i className="fas fa-envelope-open-text" /> You have a pending
          requests!
        </div>
      </div>
      <div className="dashProfileSummary">
        <div className="basic profileSummary">
          <h3>Basic Profile Information</h3>
          <div className="profileImg">
            <i className="fas fa-user-circle" />
          </div>
          <p>
            <strong>John Doe</strong>
          </p>
          <p>
            <strong>jdoe123</strong>
          </p>
          <ul>
            <li>
              <i className="fab fa-facebook-square" />{" "}
              <a href="http://wwww.facebook.com"> Facebook: jdoe</a>
            </li>
            <li>
              <i className="fab fa-twitter-square" />{" "}
              <a href="http://wwww.facebook.com"> Twitter: johndoe</a>
            </li>
            <li>
              <i className="fab fa-linkedin" />{" "}
              <a href="http://wwww.facebook.com"> LinkedIn: JohnPaulDoe</a>
            </li>
            <li>
              <i className="fab fa-github-square" />{" "}
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
          <h3>Detailed Profile Information</h3>
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
        {/* Shows both mentor requests and current mentorships */}
        <div className="mentorDashboard">
          <h3 className="requestHead">Mentorship Requests</h3>
          {/* Show All Requested Mentorship */}
          {/********************************** */}
          {/* Stand-alone Request */}
          <div className="requestedMentorship">
            <ul>
              <li>
                <span>User:</span>Paul Jones
              </li>
              <li>
                <span>Languages:</span>JavaScript, HTML, CSS
              </li>
              <li>
                <span>Request Summary:</span>
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
          {/********************************** */}
          {/* Stand-alone Request */}
          <div className="requestedMentorship">
            <ul>
              <li>
                <span>User:</span>Sally North
              </li>
              <li>
                <span>Languages:</span>C#, JavaScript
              </li>
              <li>
                <span>Request Summary:</span>
                Hi, I have a solid background in C# but would love some help
                with React. Thanks
              </li>
              <li>
                <button className="btn btn-success">Accept</button>
                <button className="btn btn-danger">Deny</button>
              </li>
            </ul>
          </div>
          <hr />
          {/* Show All Current Mentorships */}
          {/********************************** */}
          <h3 className="currentHead">Current Mentorship</h3>
          <div className="currentMentorship">
            {/********************************** */}
            {/* Stand-alone mentorship */}
            <ul>
              <li>
                <span>User:</span>Sally North
              </li>
              <li>
                <span>Start Date:</span>July 7, 2019
              </li>
              <li>
                <span>Mentorship Expires:</span> <span>22</span> Days
              </li>
              <li>
                <button className="btn btn-danger">End Mentorship</button>
              </li>
            </ul>
            {/********************************** */}
            {/* Stand-alone mentorship */}
            <ul>
              <li>
                <span>User:</span>Milton Bradley
              </li>
              <li>
                <span>Start Date:</span>June 3, 2019
              </li>
              <li>
                <span>Mentorship Expires:</span> <span>5</span> Days
              </li>
              <li>
                <button className="btn btn-danger">End Mentorship</button>
              </li>
            </ul>
            {/********************************** */}
            {/* Stand-alone mentorship */}
            <ul>
              <li>
                <span>User:</span>Peter Milo
              </li>
              <li>
                <span>Start Date:</span>June 27, 2019
              </li>
              <li>
                <span>Mentorship Expires:</span> <span>13</span> Days
              </li>
              <li>
                <button className="btn btn-danger">End Mentorship</button>
              </li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Dashboard;
