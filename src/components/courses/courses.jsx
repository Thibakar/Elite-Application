import React from "react";
import {
  Row, Container, Tab, Tabs,
} from "react-bootstrap";

import Exam from "./exam";

import "./courses.scss";
import Syllabus from "./syllabus";
import Materialscontent from "../coursematerial/materialscontent";
import ReferenceMaterials from "./referenceMaterials";
import Breadcrumb from "../shared/Breadcrumb";

export default function Courses() {
  const items = [
    {
      url: "dashboard",
      label: "Home",
    },
    {
      url: "",
      label: "Exam",
    }, {
      url: "",
      label: "Syllabus",
    }, {
      url: "",
      label: "Reference Materials",
    }, {
      url: "",
      label: "Question Papers",
    },
  ];

  return (
    <div>
      <Row>
        <Container>
          <Breadcrumb items={items} />
        </Container>

      </Row>

      <Row className="bg-green">
        <Container>
          <p className="head">
              Mechanical Engineering Subjects |
            <h7>DCET EXAM</h7>
          </p>
        </Container>
      </Row>
      <Container>
        <Tabs
          className="clr"
          defaultActiveKey="exam"
          id="uncontrolled-tab-example"
        >
          <Tab className="clr" eventKey="exam" title="Exam">
            <Exam />
          </Tab>
          <Tab eventKey="syllabus" title="Syllabus">
            <Syllabus />
          </Tab>
          <Tab eventKey="Referencematerial" title="Reference Materials">
            <ReferenceMaterials />
          </Tab>
          <Tab eventKey="Questionpapers" title="Question Papers">
            <Materialscontent />
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
}
