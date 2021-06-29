/**
 * Copyright © REFIXD TECHNOLOGIE PVT LTD. - All Rights Reserved
 * -------------",
 * This file is part of REFIXD.
 * -------------
 * Authors: Chandra shekhar <chandrashekhar@refixd.com>.
 */

import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  NavDropdown,
} from "react-bootstrap";

import CarouselPage from "../../components/carousel/carousel";
import Counselingform from "../../components/shared/counselingform";
import Sticky from "../../components/shared/stickyButton/sticky";
import { Liveclass, SDcard, CoursesCard } from "../../components/card/cards";

import "./dashboard.scss";

import icon1 from "../../assets/icons/icon1.svg";
import icon2 from "../../assets/icons/icon2.svg";
import icon3 from "../../assets/icons/icon3.svg";
import appstore from "../../assets/icons/appstore.svg";
import playstore from "../../assets/images/playstore.png";
import screen from "../../assets/images/screen.jpg";
import CardCarousel from "../../components/carousel/cardCarousel";
import VideoCarousel from "../../components/carousel/videoCarousel";
import StudentCarousel from "../../components/carousel/studentCarousel";
import TestimonalCarousel from "../../components/carousel/testimonalCarousel";

export class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topCources: true,
    };
  }

  toggleTopCources = () => {
    this.setState({ topCources: !this.state.topCources });
  };

  render() {
    return (
      <>
        <div className="sticky">
          <Sticky />
        </div>
        <CarouselPage />
        <div className="colorDarkGrayBG p-b-30 p-t-30">
          <Container>
            <Row>
              <Col md="6">
                <h1>Live Classes (Advertisement)</h1>
                <h2 className="p-t-30">How it works?</h2>
                <div>
                  <Row>
                    <Col md="1" xs="2" className="p-t-30">
                      <img src={icon1} alt="" />
                    </Col>
                    <Col xs="10" className="p-t-30">
                      <p>
                        {" "}
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod
                      </p>
                    </Col>
                  </Row>
                </div>
                <div>
                  <Row>
                    <Col md="1" xs="2" className="p-t-30">
                      <img src={icon2} alt="" />
                    </Col>
                    <Col xs="10" className="p-t-30">
                      <p>
                        {" "}
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod
                      </p>
                    </Col>
                  </Row>
                </div>
                <div>
                  <Row>
                    <Col md="1" xs="2" className="p-t-30">
                      <img src={icon3} alt="" />
                    </Col>
                    <Col xs="10" className="p-t-30">
                      <p>
                        {" "}
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod
                      </p>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col md="6">
                <div className="m-t-60">
                  <Liveclass />
                  <div className="button">
                    <Button className="live-add" variant="secondary">
                      REQUEST A LIVE DEMO
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="colorWhiteBG p-b-30 p-t-30">
          <Container>
            <Row>
              <Col md="6">
                <h1>SD Card (Advertisement)</h1>
                <h2 className="m-t-30">How it works?</h2>
                <div>
                  <Row>
                    <Col md="1" xs="2" className="p-t-30">
                      <img src={icon1} alt="" />
                    </Col>
                    <Col xs="10" className="p-t-30">
                      <p>
                        {" "}
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod
                      </p>
                    </Col>
                  </Row>
                </div>
                <div>
                  <Row>
                    <Col md="1" xs="2" className="p-t-30">
                      <img src={icon2} alt="" />
                    </Col>
                    <Col xs="10" className="p-t-30">
                      <p>
                        {" "}
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod
                      </p>
                    </Col>
                  </Row>
                </div>
                <div>
                  <Row>
                    <Col md="1" xs="2" className="p-t-30">
                      <img src={icon3} alt="" />
                    </Col>
                    <Col xs="10" className="p-t-30">
                      <p>
                        {" "}
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod
                      </p>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col md="6">
                <div className="Sd-card-video">
                  <SDcard />
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="colorDarkGrayBG p-t-30 p-b-30">
          <Container>
            <Row>
              <h1 className="side">Top Courses</h1>
              <a className="all-top-courses" herf="" onClick={this.toggleTopCources}>
                View All Top Courses
              </a>
            </Row>

            {this.state.topCources ? (
              <CardCarousel />
            ) : (
              <div className="all-courses">
                <CoursesCard />
              </div>
            )}
          </Container>
        </div>

        <div className="colorWhiteBG p-t-30 p-b-30">
          <Container>
            <Row>
              <h1>Sample Videos</h1>
              <NavDropdown
                className="dropdown-btn"
                variant="secondary"
                title="Courses"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Row>
          </Container>
          <VideoCarousel />
        </div>

        <div className="colorDarkGrayBG p-t-30 p-b-30">
          <Container>
            <h1>Our Passed-Out Students</h1>

            <StudentCarousel />
          </Container>
        </div>

        <div className="bg-img colorWhite p-t-30 p-b-30">
          <Container>
            <Row>
              <Col md="6">
                <h4 className="counseling-form"> For Queries Assistent</h4>
                <h1>Free Counselling For You</h1>
              </Col>
              <Col md="6">
                <Counselingform />
              </Col>
            </Row>
          </Container>
        </div>
        <div className="colorDarkGrayBG p-t-30 p-b-30 ">
          <Container>
            <div className="testimonial">
              <h1>Testimonial</h1>
            </div>

            <TestimonalCarousel />
          </Container>
        </div>
        <div className="bg testimonial">
          <Container>
            <Row>
              <Col md="6">
                <Row>
                  <div className="elite-learning">
                    <h1> Get Elite Learning App Today</h1>
                  </div>
                </Row>
                <Row className="elite-learning-sub">
                  Lorem ipsum dolor sit amet, consetetur sadipscing
                </Row>
                <Row className="link">
                  <Form.Control
                    className="app-link-number"
                    type="text"
                    placeholder="ENTER MOBILE NUMBER"
                  />
                  <Button className="send-link" variant="success">
                    SEND download link
                  </Button>
                </Row>
                <Row className="app">
                  <img className="app-store" src={appstore} alt="" />
                  <img className="play-store" src={playstore} alt="" />
                </Row>
              </Col>
              <Col md="6" className="screen">
                <img src={screen} alt="" />
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}
