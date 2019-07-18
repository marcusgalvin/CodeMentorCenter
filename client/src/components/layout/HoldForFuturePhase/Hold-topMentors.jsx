import React from "react";
import Modal from "react-awesome-modal";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import ProfileCard from "../profileCard/ProfileCard";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  openModal() {
    this.setState({
      visible: true
    });
  }

  closeModal() {
    this.setState({
      visible: false
    });
  }
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={2}
      >
        <section>
          <h1>React-Modal Examples</h1>
          <input type="button" value="Open" onClick={() => this.openModal()} />
          <Modal
            visible={this.state.visible}
            width="400"
            height="300"
            effect="fadeInUp"
            onClickAway={() => this.closeModal()}
          >
            <div>
              <h1>Title</h1>
              <p>Some Contents</p>
              <a href="javascript:void(0);" onClick={() => this.closeModal()}>
                Close
              </a>
            </div>
          </Modal>
        </section>
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
