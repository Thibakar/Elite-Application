/* eslint-disable import/named */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { SubjectCard, AddCard, DoubtCard } from "../card/cards";
import JoinForm from "./joinForm";

// eslint-disable-next-line react/prefer-stateless-function
export default class Materialscontent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: [
        {
          title: "DCET Mechanics",
          subjectname: "Sample Paper1",
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
        },
        {
          title: "DCET Mechanics",
          subjectname: "Sample Paper1",
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
        },
        {
          title: "DCET Mechanics",
          subjectname: "Sample Paper1",
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
        },
        {
          title: "DCET Mechanics",
          subjectname: "Sample Paper1",
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
        },
      ],
      question: [
        {
          title: "DCET Mechanics",
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
        },
        {
          title: "DCET Mechanics",
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
        },
        {
          title: "DCET Mechanics",
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
        },
        {
          title: "DCET Mechanics",
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
        },
        {
          title: "DCET Mechanics",
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md="9">
              <div>
                <h3 className="heading">Sample Question Papers Overview</h3>
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
                <h3 className="heading">Sample Question Papers</h3>
                <Row>
                  {this.state.subject.map((i, key) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <SubjectCard key={key} isDisabled data={i} />
                  ))}
                </Row>
              </div>
              <div>
                <h3 className="heading">Previous Question Papers Overview</h3>
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
                <h3 className="heading">Pervious Question Papers</h3>
                <Row>
                  {this.state.question.map((i) => (
                    <SubjectCard isDisabled data={i} />
                  ))}
                </Row>
              </div>
            </Col>
            <Col md="3">
              <AddCard />
              <DoubtCard />
              <JoinForm />
            </Col>
          </Row>
          <Row />
        </Container>
      </div>
    );
  }
}
