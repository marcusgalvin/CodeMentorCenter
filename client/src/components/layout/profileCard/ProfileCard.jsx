import React, { Fragment } from "react";
import Modal from "react-awesome-modal";
import profileImg from "../../images/p_card_default_img.gif";
import star0 from "../../images/star_rating_0.gif";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  openModal() {
    this.setState({
      visible: true
    });
  }

  closeModal() {
    this.setState({
      visible: false
    });
  }
  render() {
    return (
      <Fragment>
        <Modal
          visible={this.state.visible}
          width="800px"
          height="640px"
          effect="fadeInUp"
          onClickAway={() => this.closeModal()}
        >
          <div className="detailedProfileSummary">
            <div className="header">
              <h3>John Doe</h3>
              <h4>jdoe123</h4>
              <div className="helped-ct">
                <p className="menteeHelp">
                  Helped Mentees: <span>5</span>
                </p>
                <p className="mentoredHelp">
                  Mentored by another: <span>10</span>
                </p>
              </div>
              <div className="starRatings">
                <img src={star0} alt="Star Rating" />
              </div>
            </div>
            <div className="details">
              <div className="aboutDetail">
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
                </ul>
              </div>
              <div className="socialDetail">
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
                    <a href="http://wwww.facebook.com">
                      {" "}
                      LinkedIn: JohnPaulDoe
                    </a>
                  </li>
                  <li>
                    <i class="fab fa-github-square" />{" "}
                    <a href="http://wwww.facebook.com">
                      {" "}
                      Github: JohnGithubRepos
                    </a>
                  </li>
                </ul>
              </div>
              <div className="bioDetails">
                <p>
                  John Doe is a Professor in Computer Science at the University
                  of Washington. He received his Ph.D. from the University of
                  Pennsylvania in 1995, was a principal member of the technical
                  staff at AT&T Labs and joined the University of Washington in
                  2000. Suciu is conducting research in data management, with an
                  emphasis on topics related to Big Data and data sharing, such
                  as probabilistic data, data pricing, parallel data processing,
                  data security.
                </p>
              </div>
              <div className="langDetails">
                <div className="programLang">
                  <h4>Proficient in the follow:</h4>
                  <ul>
                    <li>
                      <a href="#">HTML5</a>
                    </li>
                    <li>
                      <a href="#">CSS3</a>
                    </li>
                    <li>
                      <a href="#">JavaScript</a>
                    </li>
                    <li>
                      <a href="#">Mongo</a>
                    </li>
                    <li>
                      <a href="#">Express</a>
                    </li>
                    <li>
                      <a href="#">NodeJS</a>
                    </li>
                  </ul>
                </div>
                <div className="speakLang">
                  <h4>Fluent Speaking Language:</h4>
                  <ul>
                    <li>English</li>
                    <li>Spanish</li>
                  </ul>
                </div>
              </div>
            </div>
            <button
              className="btn btn-danger"
              href="javascript:void(0);"
              onClick={() => this.closeModal()}
            >
              Close Popup
            </button>
            <button className="btn btn-success" href="javascript:void(0);">
              Send Mentorship Request
            </button>
          </div>
        </Modal>
        <div className="p-card">
          <header className="head">
            <h3>Paul Rogers</h3>
          </header>
          <div className="content">
            <div className="img-ct">
              <img src={profileImg} alt="Profile" />
              <img src={star0} alt="Star Rating" />
            </div>
            <div className="lang-ct">
              <h5>Programming Languages</h5>
              <ul className="pLang">
                <li>
                  <a href="#">JavaScript</a>
                </li>
                <li>
                  <a href="#">React</a>
                </li>
                <li>
                  <a href="#">C#</a>
                </li>
                <li>
                  <a href="#">Python</a>
                </li>
                <li>
                  <a href="#">HTML5</a>
                </li>
                <li>
                  <a href="#">CSS3</a>
                </li>
                <li>
                  <a href="#">PHP</a>
                </li>
                <li>
                  <a href="#">Wordpress</a>
                </li>
              </ul>
              <h5>Speaking Languages</h5>
              <ul className="sLang">
                <li>English</li>
                <li>Spanish</li>
              </ul>
            </div>
          </div>
          <div className="mentorSummary">
            <ul>
              <li>Total mentored: 0</li>
              <li>Currently mentoring: 0/4</li>
            </ul>
          </div>
          <hr />
          <div className="pSummary">
            <p>
              Long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout. The point
              of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to...
            </p>
          </div>
          <div className="request-btn viewDetails">
            <a
              href="javascript:void(0);"
              className="btn btn-primary"
              value="Open"
              onClick={() => this.openModal()}
            >
              VIEW DETAILS
            </a>
          </div>
          <div className="request-btn m-requestMentorship">
            <a href="javascript:void(0);" className="btn btn-primary">
              REQUEST MENTORSHIP
            </a>
          </div>
        </div>
      </Fragment>
    );
  }
}
