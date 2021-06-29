import React from "react";
import {
  Tab, Tabs, Container, Row,
} from "react-bootstrap";

import Materialscontent from "./materialscontent";
import Practices from "./practices";

import "./referencematerials.scss";
import CourseMaterials from "./courseMaterials";
import SampleVideos from "./sampleVideos";
import Test from "./test";
import Breadcrumb from "../shared/Breadcrumb";

export default function Referencematerials() {
  const items = [
    {
      url: "dashboard",
      label: "Home",
    },
    {
      url: "",
      label: "Cours Materials",
    },
    {
      url: "",
      label: "Question Papers",
    },
    {
      url: "",
      label: "Sample Videos",
    },
    {
      url: "",
      label: "Tests",
    },
    {
      url: "",
      label: "Practices",
    },
  ];

  return (
    <div className="container-fluid">
      <Row>
        <Container>
          <Breadcrumb items={items} />
        </Container>
      </Row>

      <Row className="bg-green">
        <Container>
          <p className="head">
              Mechanical Engineering Course |
            <h7>DCET EXAM</h7>
          </p>
        </Container>
      </Row>
      <Container>
        <Tabs
          className="clr"
          defaultActiveKey="sapmlevideos"
          id="uncontrolled-tab-example"
        >
          <Tab className="clr" eventKey="home" title="Course Materials">
            <CourseMaterials />
          </Tab>
          <Tab eventKey="questionpaper" title="Question Papers">
            <Materialscontent />
          </Tab>
          <Tab eventKey="sapmlevideos" title="Sample Videos">
            <SampleVideos />
          </Tab>
          <Tab eventKey="tests" title="Tests">
            <Test />
          </Tab>
          <Tab eventKey="practices" title="Practices">
            <Practices />
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
}
