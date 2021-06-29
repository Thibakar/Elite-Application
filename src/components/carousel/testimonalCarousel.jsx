import React from "react";
import { Carousel, Row } from "react-bootstrap";

import "./carouselCard.scss";

import { TestimonalCard } from "../card/cards";

export default function TestimonalCarousel() {
  return (
    <>
      <Carousel className=" testiCourselContainer">
        <Carousel.Item>
          <Row className="testiCoursel ">
            <TestimonalCard />
          </Row>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Row className="testiCoursel ">
            <TestimonalCard />
          </Row>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
