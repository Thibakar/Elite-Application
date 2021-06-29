import React from "react";
import { Form, Row, Button } from "react-bootstrap";
import phoneicon from "../../assets/icons/phoneicon.svg";

export default function Counselingform() {
  return (
    <div className="counselingForm">
      <Form.Control
        className="name"
        type="text"
        placeholder="enter your name"
      />
      <Form.Control
        className="number"
        type="number"
        placeholder="enter your number"
      />
      <Row>
        <Form.Control className="course" type="text" placeholder="course" />
        <Form.Control
          className="subcourse"
          type="text"
          placeholder="sub course"
        />
      </Row>
      <Button className="call-back colorBlueGreen" variant="success">
          Get Call Back
      </Button>
      <div className=" or-line m-t-20">
        <div>OR</div>

      </div>
      <Button className="call-back call-now colorBlueGreen" variant="success">
        <img className="phone-icon" src={phoneicon} alt="counslingform" />
          Call Now 9876543210
      </Button>
    </div>
  );
}
