import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap";

import Subject1 from "./subject";

// eslint-disable-next-line react/prefer-stateless-function
export default class SubjectTab extends Component {
  render() {
    return (
      <div>
        <Tabs
          className="clr-green  border "
          defaultActiveKey="subject1"
          id="uncontrolled-tab-example"
        >
          <Tab
            className=" bg-green "
            eventKey="generalpaper"
            title="General Papers"
          >
            {" "}
          </Tab>
          <Tab eventKey="subject1" title="Subject1">
            <Subject1 />
          </Tab>
          <Tab eventKey="subject2" title="Subject2">
          <Subject1 />
          </Tab>
          <Tab eventKey="subject3" title="Subject3">
          <Subject1 />
          </Tab>
          <Tab eventKey="subject4" title="Subject4">
          <Subject1 />
          </Tab>
        </Tabs>
      </div>
    );
  }
}
