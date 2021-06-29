import React from "react";
import { Row, Col } from "react-bootstrap";
import ReferenceRightContainer from "./referenceRightContainer";

import "./courses.css";


export default function CourseMaterials() {
  return (
    <>
      <Row>
        <Col md="9">
          <div className="m-t-50 verticalhorizontalMiddle m-b-50 ">
            <h1> CourseMaterials</h1>
          </div>
        </Col>
        <Col md="3">
          <ReferenceRightContainer />
        </Col>
      </Row>
    </>
  );
}
