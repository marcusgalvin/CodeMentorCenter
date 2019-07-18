import React, { Fragment } from "react";
import ProfileCard from "./profileCard/ProfileCard";

export default class extends React.Component {
  render() {
    return (
      <Fragment>
        <h4>Top Mentors</h4>
        <div className="displayCardsContainer">
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
        </div>
      </Fragment>
    );
  }
}
