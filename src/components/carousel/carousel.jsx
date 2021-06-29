import React from "react";
import { Button, Carousel } from "react-bootstrap";
import "./carouselCard.scss";
import group from "../../assets/images/group.png";

export default function CarouselPage() {
  return (
    <div className="carousel">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={group} alt="Third slide" />

          <Carousel.Caption>
            <p className="content">Banner Heading Content for The Website</p>
            <p className="content2">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy
            </p>
            <Button className="btn-1" variant="secondary">
                Know more
            </Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={group} alt="Third slide" />

          <Carousel.Caption>
            <p className="content">Banner Heading Content for The Website</p>
            <p className="content2">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy
            </p>
            <Button className="btn-1" variant="secondary">
                Know more
            </Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={group} alt="Third slide" />

          <Carousel.Caption>
            <p className="content">Banner Heading Content for The Website</p>
            <p className="content2">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy
            </p>
            <Button className="btn-1" variant="secondary">
                Know more
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
