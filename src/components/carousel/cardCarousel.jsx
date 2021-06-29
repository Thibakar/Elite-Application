import React from "react";
import { Carousel } from "react-bootstrap";
import { CoursesCard } from "../card/cards";

import "./carouselCard.scss";

export default function CardCarousel() {
  return (
    <>
      <Carousel className=" cardCourselContainer">
        <Carousel.Item>
          <div className="cardCoursel ">
            <CoursesCard />
          </div>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div className="cardCoursel ">
            <CoursesCard />
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
