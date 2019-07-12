import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import ProfileCard from "./profileCard/ProfileCard";

export default class extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={2}
      >
        <h4>Top Mentors</h4>
        <ButtonBack>Back</ButtonBack> |<ButtonNext>Next</ButtonNext>
        <p className="scrollProfile">Scroll down to vew more</p>
        <p className="scrollProfile">
          <i class="fas fa-chevron-down" />
        </p>
        <Slider>
          <Slide index={0}>
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
          </Slide>
          <Slide index={1}>
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
          </Slide>
        </Slider>
      </CarouselProvider>
    );
  }
}
