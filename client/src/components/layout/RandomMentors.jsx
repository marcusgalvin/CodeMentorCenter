import React, { Fragment } from "react";
import ProfileCard from "./profileCard/ProfileCard";

export default class extends React.Component {
  render() {
    return (
      <Fragment>
        <h4 className="lead">Our Mentors</h4>
        <p className="random-mentors">
          Long established fact that a reader will be distracted by the readable
          content of a page when looking at its layout. The point of using Lorem
          Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using
        </p>
        <h5>Mentors below are shown randomly and in no particular order</h5>
        <div className="displayCardsContainer">
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
        </div>
      </Fragment>
    );
  }
}
