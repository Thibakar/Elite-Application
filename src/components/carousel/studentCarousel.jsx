import React from "react";
import { Carousel } from "react-bootstrap";
import { PassedOutStudent } from "../card/cards";

import "./carouselCard.scss";

export default function StudentCarousel() {
  return (
    <>
      <Carousel className=" cardCourselContainer">
        <Carousel.Item>
          <div className="cardCoursel ">
            <PassedOutStudent />
          </div>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div className="cardCoursel ">
            <PassedOutStudent />
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
