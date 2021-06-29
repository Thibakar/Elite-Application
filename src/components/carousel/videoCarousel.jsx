import React from "react";
import { Carousel } from "react-bootstrap";
import { VideoCard } from "../card/cards";

import "./carouselCard.scss";

export default function CrardCarousel() {
  return (
    <>
      <Carousel className=" videoCourselContainer">
        <Carousel.Item>
          <div className="videoCoursel ">
            <VideoCard />
            <VideoCard />
            <VideoCard />
          </div>
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="videoCoursel ">
            <VideoCard />
            <VideoCard />
            <VideoCard />
          </div>
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="videoCoursel ">
            <VideoCard />
            <VideoCard />
            <VideoCard />
          </div>
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
