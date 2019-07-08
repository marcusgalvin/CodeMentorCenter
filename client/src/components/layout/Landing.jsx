import React from "react";

const Landing = () => {
  return (
    <section className="landing">
      <div className="landing-inner">
        {/* CMC Hero Banner Container */}
        hero banner component
        {/* Header Content w/ Register Button */}
        call to action register button
        {/* Search Field Container */}
        <div className="search-landing">search component</div>
        {/* Top Rated Mentors Showcase */}
        <div className="top-rated-mentors">
          <h4 className="lead">Top Rated Mentors</h4>
          <div className="carousel-ct" />
        </div>
        {/* Higher Learning at CareerDevs */}
        online learning component
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
        </div>
        {/* Footer Container */}
        footer component
      </div>
    </section>
  );
};

export default Landing;
