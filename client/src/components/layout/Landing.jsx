import React from "react";
import HeroBanner from "./HeroBanner";
import CTARegister from "./CTARegister";
import Search from "./Search";
import TopMentors from "./TopMentors";

const Landing = () => {
  return (
    <div className="container">
      <section className="landing">
        <div className="landing-inner">
          {/* CMC Hero Banner Container */}
          <HeroBanner />
          {/* Header Content w/ Register Button */}
          <CTARegister />
          {/* Search Field Container */}
          <Search />
          {/* Top Rated Mentors Showcase */}
          <TopMentors />
          {/* Higher Learning at CareerDevs */}
          Online learning container
          {/* Random Mentor Showcase */}
          <div className="random-mentors">
            <h4 className="lead">Mentors</h4>
            <p>
              Long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout. The point
              of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using
            </p>
            <div className="carousel-ct" />
            Random Mentor's carousel container
          </div>
          {/* Random Mentee Showcase */}
          <div className="random-mentees">
            <h4 className="lead">Mentees</h4>
            <p>
              Long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout. The point
              of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using
            </p>
            <div className="carousel-ct" />
            Random Mentee's carousel container
          </div>
          {/* Footer Container */}
          footer component
        </div>
      </section>
    </div>
  );
};

export default Landing;
