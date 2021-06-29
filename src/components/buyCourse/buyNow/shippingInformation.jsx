import React, { Component } from "react";
import {
  Row, Col, Form, Button, Modal,
} from "react-bootstrap";
import elitereg1 from "../../../assets/images/carouselimg.png";

import "./buyNow.scss";

export default class ShippingInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
  }

  toggleRegisterModal = () => {
    this.setState({ modal: !this.state.modal });
  };

  render() {
    return (
      <>
        <Row>
          <Col md="6">
            <h1 className="m-t-50 shipping-head">IIT-JAM, Maths</h1>
            SD Card + Live Class -
            {" "}
            <br />
₹ 20,000.00
            <div className="m-t-30">
              <h3>Contact Information</h3>
              <div className="m-t-20">
                <Form.Control
                  className="m-t-20"
                  type="number"
                  placeholder="Mobile No."
                />
                <Form.Control
                  className="m-t-20"
                  type="email"
                  placeholder="Email ID"
                />
                <Form.Check
                  className="m-t-20"
                  type="checkbox"
                  label="Update me with latest news and offers"
                />
              </div>
            </div>
            <div className="m-t-30">
              <h3>Shipping Address</h3>
              <Row>
                <Col md="6">
                  <Form.Control
                    className="m-t-20"
                    type="name"
                    placeholder="First Name*"
                  />
                </Col>
                <Col md="6">
                  <Form.Control
                    className="m-t-20"
                    type="text"
                    placeholder="Last Name*"
                  />
                </Col>
              </Row>
              <Form.Control
                className="m-t-20"
                type="text"
                placeholder="Address*"
              />
              <Form.Control
                className="m-t-20"
                type="text"
                placeholder="Apartment, suite, etc."
              />
              <Form.Control
                className="m-t-20"
                type="text"
                placeholder="City*"
              />
              <Row>
                <Col md="6">
                  <Form.Control
                    className="m-t-20"
                    type="text"
                    placeholder="Country*"
                  />
                  <Form.Control
                    className="m-t-20"
                    type="text"
                    placeholder="Pin Code*"
                  />
                </Col>
                <Col md="6">
                  <Form.Control
                    className="m-t-20"
                    type="text"
                    placeholder="State"
                  />
                </Col>
              </Row>

              <Form.Check
                className="m-t-20"
                type="checkbox"
                label="Save this information for next time"
              />
            </div>
          </Col>
        </Row>
        <div onClick={this.toggleRegisterModal}>
          <div className="m-t-30 verticalhorizontalMiddle ">
            <Button className="paymentButton" variant="secondary">
              CONTINUE TO PAYMENT
            </Button>
          </div>
        </div>
        <Modal
          backdrop={false}
          dialogClassName="customModal"
          size="lg"
          show={this.state.modal}
          onHide={this.toggleRegisterModal}
        >
          <Modal.Header closeButton>
            <Modal.Title className="Inst">Instructions </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div className="mainInstructions p-t-10">
                <div>
                  <img alt="logo" src={elitereg1} />
                </div>
                <p className="InstRight">
                  {" "}
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam
                </p>
              </div>
              <div className="mainInstructions p-t-10">
                <div>
                  <img alt="logo" src={elitereg1} />
                </div>
                <p className="InstRight">
                  {" "}
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam
                </p>
              </div>
              <div className="mainInstructions p-t-10">
                <div>
                  <img alt="logo" src={elitereg1} />
                </div>
                <p className="InstRight">
                  {" "}
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam
                </p>
              </div>
            </div>
            <a
              className="verticalhorizontalMiddle  p-t-40  p-b-10 colorBlueGreen startTest "
              href="buyNow"
            >
              START TEST
            </a>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
