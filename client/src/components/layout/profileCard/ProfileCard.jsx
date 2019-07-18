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
          width="400"
          height="300"
          effect="fadeInUp"
          onClickAway={() => this.closeModal()}
        >
          <div>
            <h1>Title</h1>
            <p>Some Contents</p>
            <a href="javascript:void(0);" onClick={() => this.closeModal()}>
              Close
            </a>
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
          <div className="request-btn">
            <a
              href="javascript:void(0);"
              className="btn btn-primary btn-rounded"
              value="Open"
              onClick={() => this.openModal()}
            >
              REQUEST MENTORSHIP
            </a>
          </div>
        </div>
      </Fragment>
    );
  }
}
