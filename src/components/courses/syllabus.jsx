import React from "react";
import { Link } from "react-router-dom";
import {
  Container, Col, Row,
} from "react-bootstrap";

import "./syllabus.scss";
import SubjectTab from "./subject/subjectTab";
import CourseRightContainer from "./coursesRightContainer";

export default function Syllabus() {
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


            <div>
              <h1 className="heading">Select the Subject</h1>
              <SubjectTab />

            </div>


          </Col>
          <Col md="3" className="right-container">
            <CourseRightContainer />

          </Col>
        </Row>
      </Container>
    </div>
  );
}
