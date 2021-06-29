import React from "react";
import { Carousel } from "react-bootstrap";
import elitereg1 from "../../assets/images/carouselimg.png";

import "./loginCarousel.scss";

export default function LoginCarousel() {
  return (
    <Carousel className="carousel_img">
      <Carousel.Item className="carousel-align">
        <img className="carousel-img" src={elitereg1} alt="second slide" />
        <Carousel.Caption className="caro-change">
          <h1 className=" EliteFont"><b>Elite Learning App</b></h1>
          <p className="studierColor">Your studies made easier.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-align">
        <img className="carousel-img" src={elitereg1} alt="Third slide" />

        <Carousel.Caption className="caro-change">
          <h1 className=" EliteFont"><b>Elite Learning App</b></h1>
          <p className="">Your studies made easier.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
