import React, { Component } from "react";
import { Row, Container, Col } from "react-bootstrap";
import { DoubtCard, VideoCard } from "../card/cards";

export default class SampleVideos extends Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col md="9">
              <div>
                <h3 className="heading">Samplre video Overview</h3>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet
                </p>
                <div>
                  <div class="flex-container">
                      <Row>
                    <Col md="4"><VideoCard/></Col>
                    <Col md="4"><VideoCard/></Col>
                    <Col md="4"><VideoCard/></Col>
                    <Col md="4"><VideoCard/></Col>
                    </Row>
                    
                  </div>
                </div>
              </div>
            </Col>
            <Col md="3">
                <div className="m-l-40">
                    <DoubtCard />
                    </div>
              
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
