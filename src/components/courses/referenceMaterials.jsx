import React from "react";
import { Row, Col } from "react-bootstrap";
import CourseRightContainer from "./coursesRightContainer";

export default function ReferenceMaterials() {
  return (
    <div className="container-fluid">
      <Row>
        <Col md="9">
          <div className="m-t-50 verticalhorizontalMiddle m-b-50">
            <h1> Reference Materials</h1>
          </div>

        </Col>
        <Col md="3">
          <CourseRightContainer />
        </Col>
      </Row>
    </div>
  );
}
