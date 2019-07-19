import React, { Fragment } from "react";
import Footer from "./Footer";
import coverImg from "../images/about-profile-cover.png";
import profileImg from "../images/about-profile-img.png";

{
  /* This style brings the content below the fixed header */
}
const footerDiv = {
  marginTop: "108px"
};

const AboutUs = () => {
  return (
    <Fragment>
      <div className="aboutUs-ct">
        <h2>Meet The Developers</h2>
        <p className="pageSummary">
          Transom list stern draught maroon fore chantey booty nipperkin
          Corsair. Clipper careen gally execution dock long boat league scurvy
          lee jib transom. Barkadeer swab grapple gibbet bucko bilge Letter of
          Marque doubloon bilge rat gally.
        </p>
        {/* Profile cards- row 1 */}
        <div className="card-container">
          {/* Card - Carl K */}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="cover">
                  <img src={coverImg} />
                </div>
                <div className="user">
                  <img src={require("../images/carl.jpg")} />
                </div>
                <div className="content">
                  <div className="main">
                    <h3 className="name">Carl Kakisis</h3>
                    <p className="classYear">CareerDevs 2019 | Cohort 7</p>
                    <p className="text-center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                  <div className="footer" />
                  <i className="fas fa-share" /> Flip
                </div>
              </div>
              <div className="flip-card-back">
                <div className="header">
                  <h5 className="motto">
                    “First, solve the problem. Then, write the code.” – John
                    Johnson
                  </h5>
                </div>
                <div className="content">
                  <div className="main">
                    <h4 className="text-center">Studies</h4>
                    <p className="text-center">
                      JavaScript, HTML/CSS, MERN, Mongo/SQL, C, C#/.NET, JAVA,
                      Algorithms, Data Structures, Agile, Git/Github
                    </p>
                  </div>
                  <div className="stats-container">
                    <div className="stats">
                      <h4>61</h4>
                      <p>Followers</p>
                    </div>
                    <div className="stats">
                      <h4>64</h4>
                      <p>Following</p>
                    </div>
                    <div className="stats">
                      <h4>59</h4>
                      <p>Projects</p>
                    </div>
                  </div>
                  <div className="footer">
                    <div className="social-links text-center">
                      <a
                        href="https://twitter.com/CKakisis"
                        className="twitter"
                      >
                        <i className="fab fa-twitter" />
                      </a>
                      <a
                        href="https://github.com/Messinias1"
                        className="github"
                      >
                        <i className="fab fa-github" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Card - Tom B */}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="cover">
                  <img src={coverImg} />
                </div>
                <div className="user">
                  <img src={require("../images/tom.jpg")} />
                </div>
                <div className="content">
                  <div className="main">
                    <h3 className="name">Tom Blais</h3>
                    <p className="classYear">CareerDevs 2019 | Cohort 7</p>
                    <p className="text-center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                  <div className="footer" />
                  <i className="fas fa-share" /> Flip
                </div>
              </div>
              <div className="flip-card-back">
                <div className="header">
                  <h5 className="motto">
                    “Experience is the name everyone gives to their mistakes.” –
                    Oscar Wilde
                  </h5>
                </div>
                <div className="content">
                  <div className="main">
                    <h4 className="text-center">Studies</h4>
                    <p className="text-center">
                      JavaScript, HTML/CSS, MERN, Mongo/SQL, C, C#/.NET, JAVA,
                      Algorithms, Data Structures, Agile, Git/Github
                    </p>
                  </div>
                  <div className="stats-container">
                    <div className="stats">
                      <h4>111</h4>
                      <p>Followers</p>
                    </div>
                    <div className="stats">
                      <h4>109</h4>
                      <p>Following</p>
                    </div>
                    <div className="stats">
                      <h4>38</h4>
                      <p>Projects</p>
                    </div>
                  </div>
                  <div className="footer">
                    <div className="social-links text-center">
                      <a
                        href="https://twitter.com/tblais1224"
                        className="twitter"
                      >
                        <i className="fab fa-twitter" />
                      </a>
                      <a
                        href="https://github.com/tblais1224"
                        className="github"
                      >
                        <i className="fab fa-github" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Card - Marcus G */}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="cover">
                  <img src={coverImg} />
                </div>
                <div className="user">
                  <img src={require("../images/marcus.jpg")} />
                </div>
                <div className="content">
                  <div className="main">
                    <h3 className="name">Marcus Galvin</h3>
                    <p className="classYear">CareerDevs 2019 | Cohort 7</p>
                    <p className="text-center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                  <div className="footer" />
                  <i className="fas fa-share" /> Flip
                </div>
              </div>
              <div className="flip-card-back">
                <div className="header">
                  <h5 className="motto">
                    “In order to be irreplaceable, one must always be different”
                    – Coco Chanel
                  </h5>
                </div>
                <div className="content">
                  <div className="main">
                    <h4 className="text-center">Studies</h4>
                    <p className="text-center">
                      JavaScript, HTML/CSS, MERN, Mongo/SQL, C, C#/.NET, JAVA,
                      Algorithms, Data Structures, Agile, Git/Github
                    </p>
                  </div>
                  <div className="stats-container">
                    <div className="stats">
                      <h4>327</h4>
                      <p>Followers</p>
                    </div>
                    <div className="stats">
                      <h4>508</h4>
                      <p>Following</p>
                    </div>
                    <div className="stats">
                      <h4>45</h4>
                      <p>Projects</p>
                    </div>
                  </div>
                  <div className="footer">
                    <div className="social-links text-center">
                      <a
                        href="https://twitter.com/MarcusGalvin"
                        className="twitter"
                      >
                        <i className="fab fa-twitter" />
                      </a>
                      <a
                        href="https://github.com/marcusgalvin"
                        className="github"
                      >
                        <i className="fab fa-github" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Profile cards- row 2 */}
          <div className="card-container">
            {/* Card - Jose M */}
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="cover">
                    <img src={coverImg} />
                  </div>
                  <div className="user">
                    <img src={require("../images/jose.png")} />
                  </div>
                  <div className="content">
                    <div className="main">
                      <h3 className="name">JoseMiguel Marte</h3>
                      <p className="classYear">CareerDevs 2019 | Cohort 7</p>
                      <p className="text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                    <div className="footer" />
                    <i class="fas fa-share" /> Flip
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="header">
                    <h5 className="motto">
                      “Java is to JJavaScript what car is to Carpet.” – Chris
                      Heilmann
                    </h5>
                  </div>
                  <div className="content">
                    <div className="main">
                      <h4 className="text-center">Studies</h4>
                      <p className="text-center">
                        JavaScript, HTML/CSS, MERN, Mongo/SQL, C, C#/.NET, JAVA,
                        Algorithms, Data Structures, Agile, Git/Github
                      </p>
                    </div>
                    <div className="stats-container">
                      <div className="stats">
                        <h4>242</h4>
                        <p>Followers</p>
                      </div>
                      <div className="stats">
                        <h4>357</h4>
                        <p>Following</p>
                      </div>
                      <div className="stats">
                        <h4>51</h4>
                        <p>Projects</p>
                      </div>
                    </div>
                    <div className="footer">
                      <div className="social-links text-center">
                        <a
                          href="https://twitter.com/musikit0"
                          className="twitter"
                        >
                          <i className="fab fa-twitter" />
                        </a>
                        <a
                          href="https://github.com/musikito"
                          className="github"
                        >
                          <i className="fab fa-github" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Card - Hayden B */}
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="cover">
                    <img src={coverImg} />
                  </div>
                  <div className="user">
                    <img src={require("../images/hayden.png")} />
                  </div>
                  <div className="content">
                    <div className="main">
                      <h3 className="name">Hayden Bryant</h3>
                      <p className="classYear">CareerDevs 2019 | Cohort 7</p>
                      <p className="text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                    <div className="footer" />
                    <i className="fas fa-share" /> Flip
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="header">
                    <h5 className="motto">
                      “Knowledge is power.” – Francis Bacon
                    </h5>
                  </div>
                  <div className="content">
                    <div className="main">
                      <h4 className="text-center">Studies</h4>
                      <p className="text-center">
                        JavaScript, HTML/CSS, MERN, Mongo/SQL, C, C#/.NET, JAVA,
                        Algorithms, Data Structures, Agile, Git/Github
                      </p>
                    </div>
                    <div className="stats-container">
                      <div className="stats">
                        <h4>21</h4>
                        <p>Followers</p>
                      </div>
                      <div className="stats">
                        <h4>60</h4>
                        <p>Following</p>
                      </div>
                      <div className="stats">
                        <h4>23</h4>
                        <p>Projects</p>
                      </div>
                    </div>
                    <div className="footer">
                      <div className="social-links text-center">
                        <a
                          href="https://twitter.com/htbry20"
                          className="twitter"
                        >
                          <i className="fab fa-twitter" />
                        </a>
                        <a
                          href="https://github.com/HaydenBryant"
                          className="github"
                        >
                          <i className="fab fa-github" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Card - Carl D */}
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="cover">
                    <img src={coverImg} />
                  </div>
                  <div className="user">
                    <img src={require("../images/carlD.jpg")} />
                  </div>
                  <div className="content">
                    <div className="main">
                      <h3 className="name">Carl Durand</h3>
                      <p className="classYear">CareerDevs 2019 | Cohort 7</p>
                      <p className="text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                    <div className="footer" />
                    <i className="fas fa-share" /> Flip
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="header">
                    <h5 className="motto">
                      “Code is like humor. When you have to explain it, it’s
                      bad.” – Cory House
                    </h5>
                  </div>
                  <div className="content">
                    <div className="main">
                      <h4 className="text-center">Studies</h4>
                      <p className="text-center">
                        JavaScript, HTML/CSS, MERN, Mongo/SQL, C, C#/.NET, JAVA,
                        Algorithms, Data Structures, Agile, Git/Github
                      </p>
                    </div>
                    <div className="stats-container">
                      <div className="stats">
                        <h4>64</h4>
                        <p>Followers</p>
                      </div>
                      <div className="stats">
                        <h4>44</h4>
                        <p>Following</p>
                      </div>
                      <div className="stats">
                        <h4>117</h4>
                        <p>Projects</p>
                      </div>
                    </div>
                    <div className="footer">
                      <div className="social-links text-center">
                        <a
                          href="https://twitter.com/carlmarvyns"
                          className="twitter"
                        >
                          <i className="fab fa-twitter" />
                        </a>
                        <a
                          href="https://github.com/carldurand"
                          className="github"
                        >
                          <i className="fab fa-github" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Profile cards- row 2 */}
        <div className="card-container">
          {/* Card - Matt T */}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="cover">
                  <img src={coverImg} />
                </div>
                <div className="user">
                  <img src={require("../images/matt.png")} />
                </div>
                <div className="content">
                  <div className="main">
                    <h3 className="name">Matt Tartaglia</h3>
                    <p className="classYear">CareerDevs 2019 | Cohort 7</p>
                    <p className="text-center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                  <div className="footer" />
                  <i class="fas fa-share" /> Flip
                </div>
              </div>
              <div className="flip-card-back">
                <div className="header">
                  <h5 className="motto">
                    “Fix the cause, not the symptom.” – Steve Maguire
                  </h5>
                </div>
                <div className="content">
                  <div className="main">
                    <h4 className="text-center">Studies</h4>
                    <p className="text-center">
                      JavaScript, HTML/CSS, MERN, Mongo/SQL, C, C#/.NET, JAVA,
                      Algorithms, Data Structures, Agile, Git/Github
                    </p>
                  </div>
                  <div className="stats-container">
                    <div className="stats">
                      <h4>68</h4>
                      <p>Followers</p>
                    </div>
                    <div className="stats">
                      <h4>131</h4>
                      <p>Following</p>
                    </div>
                    <div className="stats">
                      <h4>50</h4>
                      <p>Projects</p>
                    </div>
                  </div>
                  <div className="footer">
                    <div className="social-links text-center">
                      <a
                        href="https://twitter.com/TartagliaMatt"
                        className="twitter"
                      >
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="https://github.com/m-tartag" className="github">
                        <i className="fab fa-github" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Card - Steve B */}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="cover">
                  <img src={coverImg} />
                </div>
                <div className="user">
                  <img src={require("../images/steve1.png")} />
                </div>
                <div className="content">
                  <div className="main">
                    <h3 className="name">Steve Barriere</h3>
                    <p className="classYear">CareerDevs 2019 | Cohort 7</p>
                    <p className="text-center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                  <div className="footer" />
                  <i className="fas fa-share" /> Flip
                </div>
              </div>
              <div className="flip-card-back">
                <div className="header">
                  <h5 className="motto">
                    “Simplicity is the soul of efficiency.” – Austin Freeman
                  </h5>
                </div>
                <div className="content">
                  <div className="main">
                    <h4 className="text-center">Studies</h4>
                    <p className="text-center">
                      JavaScript, HTML/CSS, MERN, Mongo/SQL, C, C#/.NET, JAVA,
                      Algorithms, Data Structures, Agile, Git/Github
                    </p>
                  </div>
                  <div className="stats-container">
                    <div className="stats">
                      <h4>166</h4>
                      <p>Followers</p>
                    </div>
                    <div className="stats">
                      <h4>355</h4>
                      <p>Following</p>
                    </div>
                    <div className="stats">
                      <h4>58</h4>
                      <p>Projects</p>
                    </div>
                  </div>
                  <div className="footer">
                    <div className="social-links text-center">
                      <a
                        href="https://twitter.com/steve_barriere"
                        className="twitter"
                      >
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="https://github.com/sfb-git" className="github">
                        <i className="fab fa-github" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Card - Oscar D */}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="cover">
                  <img src={coverImg} />
                </div>
                <div className="user">
                  <img src={require("../images/oscar.jpg")} />
                </div>
                <div className="content">
                  <div className="main">
                    <h3 className="name">Oscar Diahn</h3>
                    <p className="classYear">CareerDevs 2019 | Cohort 7</p>
                    <p className="text-center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                  <div className="footer" />
                  <i className="fas fa-share" /> Flip
                </div>
              </div>
              <div className="flip-card-back">
                <div className="header">
                  <h5 className="motto">
                    “Make it work, make it right, make it fast.” – Kent Beck
                  </h5>
                </div>
                <div className="content">
                  <div className="main">
                    <h4 className="text-center">Studies</h4>
                    <p className="text-center">
                      JavaScript, HTML/CSS, MERN, Mongo/SQL, C, C#/.NET, JAVA,
                      Algorithms, Data Structures, Agile, Git/Github
                    </p>
                  </div>
                  <div className="stats-container">
                    <div className="stats">
                      <h4>30</h4>
                      <p>Followers</p>
                    </div>
                    <div className="stats">
                      <h4>68</h4>
                      <p>Following</p>
                    </div>
                    <div className="stats">
                      <h4>19</h4>
                      <p>Projects</p>
                    </div>
                  </div>
                  <div className="footer">
                    <div className="social-links text-center">
                      <a
                        href="https://twitter.com/oddiahn1"
                        className="twitter"
                      >
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="https://github.com/Odiahn12" className="github">
                        <i className="fab fa-github" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={footerDiv}>
        <Footer />
      </div>{" "}
    </Fragment>
  );
};

export default AboutUs;
