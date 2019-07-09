import React from "react";
import HeroBanner from "./HeroBanner";
import CTARegister from "./CTARegister";

const Landing = () => {
  return (
    <section className="landing">
      <div className="landing-inner">
        {/* CMC Hero Banner Container */}
        <HeroBanner />
        {/* Header Content w/ Register Button */}
        <CTARegister />
        {/* Search Field Container */}
        <div className="search-landing">search component</div>
        {/* Top Rated Mentors Showcase */}
        <div className="top-rated-mentors">
          <h4 className="lead">Top Rated Mentors</h4>
          <div className="carousel-ct" />
          Top Mentor's carousel container
        </div>
        {/* Higher Learning at CareerDevs */}
        Online learning container
        {/* Random Mentor Showcase */}
        <div className="random-mentors">
          <h4 className="lead">Mentors</h4>
          <p>
            Long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using
          </p>
          <div className="carousel-ct" />
          Random Mentor's carousel container
        </div>
        {/* Random Mentee Showcase */}
        <div className="random-mentees">
          <h4 className="lead">Mentees</h4>
          <p>
            Long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using
          </p>
          <div className="carousel-ct" />
          Random Mentee's carousel container
        </div>
        {/* Footer Container */}
        footer component
      </div>
    </section>
  );
};

export default Landing;
