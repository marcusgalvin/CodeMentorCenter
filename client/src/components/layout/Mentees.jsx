import React, { Fragment } from "react";
import Footer from "./Footer";
import ProfileCard from "./profileCard/ProfileCard";

{
  /* This style brings the content below the fixed header */
}
const footerDiv = {
  marginTop: "108px"
};

const Mentees = () => {
  return (
    <Fragment>
      <div className="mentees-ct">
        <h2>CMC Mentees</h2>
        <p className="pageSummary">
          Transom list stern draught maroon fore chantey booty nipperkin
          Corsair. Clipper careen gally execution dock long boat league scurvy
          lee jib transom. Barkadeer swab grapple gibbet bucko bilge Letter of
          Marque doubloon bilge rat gally.
        </p>
        <p className="pageSummary">
          Pirate tender lookout piracy Buccaneer walk the plank square-rigged
          lanyard killick nipperkin. Hardtack spirits transom yard pinnace
          clipper deadlights loaded to the gunwalls black spot quarter.
          Landlubber or just lubber barkadeer belaying pin draft fluke chase
          guns hornswaggle Shiver me timbers gangplank ho.
        </p>
        <p className="pageSummary">
          Buccaneer poop deck chantey jib gun capstan clap of thunder marooned
          Sink me scourge of the seven seas. Furl walk the plank splice the main
          brace sutler maroon hempen halter cutlass broadside provost ahoy. Hang
          the jib weigh anchor fore Sail ho lugger long clothes bounty come
          about stern wench.
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

export default Mentees;
