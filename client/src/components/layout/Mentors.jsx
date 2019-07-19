import React, { Fragment } from "react";
import Footer from "./Footer";
import ProfileCard from "./profileCard/ProfileCard";
{
  /* This style brings the content below the fixed header */
}
const footerDiv = {
  marginTop: "108px"
};

const Mentors = () => {
  return (
    <Fragment>
      <div className="mentors-ct">
        <h2>CMC Mentors</h2>
        <p className="pageSummary">
          Topmast draft strike colors jury mast Jack Tar Corsair yawl booty lass
          Cat o'nine tails. Scurvy furl bucko heave to Spanish Main deadlights
          belay six pounders provost blow the man down. Hail-shot provost
          Nelsons folly Pirate Round dance the hempen jig topmast flogging
          shrouds bowsprit capstan.
        </p>
        <p className="pageSummary">
          Killick Buccaneer Chain Shot ballast starboard landlubber or just
          lubber boom hearties mizzen clipper. Salmagundi Pirate Round trysail
          chase guns scallywag cog booty matey black jack Nelsons folly. Gally
          nipper keelhaul strike colors avast piracy tack topsail lee Gold Road.
        </p>
        <h5>Mentors below are shown randomly and in no particular order</h5>
        <div className="allMentors-ct">
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
        </div>
      </div>
      <div style={footerDiv}>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Mentors;
