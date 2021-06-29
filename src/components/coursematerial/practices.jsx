/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";
import {
  Row, Col, Container, Button, Card,
} from "react-bootstrap";

import { PracticesCard, AddCard, DoubtCard } from "../card/cards";
import JoinForm from "./joinForm";

import "./practices.scss";

import practicesimage from "../../assets/images/practices-img.jpg";

export default class Practices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Practice: [
        {
          title: "DCET",
          subtitle: "Mechanics",
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
        },
        {
          title: "DCET",
          subtitle: "Mechanics",
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
        },
        {
          title: "DCET",
          subtitle: "Mechanics",
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
        },
        {
          title: "DCET",
          subtitle: "Mechanics",
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
        },
        {
          title: "DCET",
          subtitle: "Mechanics",
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
        },
      ],
    };
  }

  render() {
    return (
      <>
        <Container>
          <Row>
            <Col md="9">
              <div>
                <h3 className="heading">Practice Overview</h3>
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
              </div>

              <div>
                <h3 className="heading">Practices</h3>
                <Row>
                  {this.state.Practice.map((i) => (
                    <PracticesCard isDisabled Practice={i} />
                  ))}
                </Row>
                <div className="m-b-30">
                  <Card className=" practices-Register verticalMiddle">
                    <img
                      className="verticalMiddle"
                      src={practicesimage}
                      alt="practicesimg"
                    />

                    <Button
                      className=" practices-btn  m-b-30 verticalMiddle"
                      variant="success"
                    >
                      REGISTER FOR FREE
                    </Button>
                  </Card>
                </div>
              </div>
            </Col>
            <Col md="3">
              <AddCard />
              <DoubtCard />
              <JoinForm />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
