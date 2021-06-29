import React from "react";
import { Link } from "react-router-dom";
import {
  Container, Col, Row, Table,
} from "react-bootstrap";

import Examcalender from "./examcalender";
import Checkbox from "./checkbox";
import Cutoffmarks from "./cutoffmarks";
import PieChart from "../charts/PieChart";
import Examoverview from "./examoverview";

import "./exam.scss";

import examimg from "../../assets/images/examimg.jpg";
import CourseRightContainer from "./coursesRightContainer";

export default function Exam() {
  return (
    <div>
      <Container>
        <Row>
          <Col md="9">
            <p className="m-t-30">
              {" "}
                This Course is available in
              {" "}
              <Link className="goto" path="#">
                  Sdcard
                {" "}
              </Link>
                and
              {" "}
              <Link className="goto" path="#">
                  Live class
              </Link>
            </p>

            <h3 className="heading"> DCET Exam</h3>
            <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem
            </p>
            <div>
              <Container>
                <Row>
                  <Col md="7">
                    <h4 className="sub-head"> Exam Overview</h4>
                    <Examoverview />
                  </Col>
                  <Col md="5">
                    <h4 className="sub-head"> Official Link</h4>
                    <img className="exam-img" src={examimg} alt="" />
                    <p className="link-head"> Official Website</p>
                    <Link className="goto colorBlue" path="#">
                      <p className="colorBlue">
                        {" "}
                          http://kea.kar.nic.in/dcet2018.html
                      </p>
                    </Link>
                    <p className="link-head"> Exam Date</p>
                    <p className="colorBlue">01 - Jan - 2020</p>
                  </Col>
                </Row>
              </Container>
            </div>

            <div>
              <Container>
                <h3> Exam Calendar</h3>
                <Examcalender />
              </Container>
            </div>

            <div>
              <Container>
                <Row>
                  <Col md="7">
                    <h3> Fees</h3>
                    <Table responsive bordered>
                      <thead>
                        <tr>
                          <th>Table heading</th>
                          <th>Table heading</th>
                          <th>Table heading</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                        </tr>
                        <tr>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                        </tr>
                        <tr>
                          <td>Table cell</td>
                          <td>Table cell</td>
                          <td>Table cell</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                  <Col md="5 ">
                    <h3> Mode Of Payment</h3>
                    <Table responsive bordered>
                      <tbody>
                        <tr>
                          <td>
                            <div className="checkbox">
                              <span>
                                <input type="checkbox" value="" />
                                  Model 1
                              </span>
                            </div>
                          </td>
                          <td>
                            <div className="checkbox">
                              <span>
                                <input type="checkbox" value="" />
                                  Mode 2
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="checkbox">
                              <span>
                                <input type="checkbox" value="" />
                                  Mode 3
                              </span>
                            </div>
                          </td>
                          <td>
                            <div className="checkbox">
                              <span>
                                <input type="checkbox" value="" />
                                  Mode 4
                              </span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </Container>
            </div>

            <div>
              <Container>
                <h3 className=""> Eligibility Criteria</h3>

                <Checkbox />
              </Container>
            </div>
            <div>
              <Row>
                <Col md="6">
                  <h3> Cut Off Marks</h3>
                  <Cutoffmarks />
                </Col>
                <Col md="6">
                  <h3> Seat Reservation</h3>
                  <div>
                    <PieChart />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>

          <Col md="3" className="right-container">
            <CourseRightContainer />
          </Col>
        </Row>

        <div />
      </Container>
    </div>
  );
}
