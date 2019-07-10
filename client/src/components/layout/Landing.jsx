import React from "react";
import HeroBanner from "./HeroBanner";
import CTARegister from "./CTARegister";
import Search from "./Search";
import TopMentors from "./TopMentors";
import RandomMentors from "./RandomMentors";
import RandomMentees from "./RandomMentees";
import OnlineLearning from "./OnlineLearning";
import Footer from "./Footer";

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
          <OnlineLearning />
          {/* Random Mentor Showcase */}
          <RandomMentors />
          {/* Random Mentee Showcase */}
          <RandomMentees />
          {/* Footer Container */}
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default Landing;
