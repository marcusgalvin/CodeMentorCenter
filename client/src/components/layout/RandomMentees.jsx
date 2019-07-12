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
        <div className="random-mentees">
          <h4 className="lead">Mentees</h4>
          <p>
            Long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using
          </p>
        </div>
        <h5>Mentees below are shown randomly and in no particular order</h5>
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
