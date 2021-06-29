import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  ListGroup,
  Button,
  Form,
} from "react-bootstrap";

import ModalComponent from "../../shared/modal";
import check from "../../../assets/icons/checked.svg";

import "./buyNow.scss";

export default class Payment extends Component {
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
        <div className="m-t-40">
          <Row>
            <Col md="9">
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col md="2">Contact </Col>
                      <Col md="8">rahul@gmail.com</Col>
                      <Col md="2">Change</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col md="2">Ship To</Col>
                      <Col md="8">#110, Kasturi Nagar, Bangalore, 560043 </Col>
                      <Col md="2">Change</Col>
                    </Row>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>

          <div className="m-t-50">
            <h1>Payment</h1>
            <h6>All transaction are secure and encrypted</h6>
            <div className="m-t-50 m-l-50">
              <Row>
                <Col md="9">
                  <Card>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <Row>
                          <div className="colorDarkGrayBG">
                            Amount : ₹ 20,000.00 Transaction ID. 145632897132123
                          </div>
                        </Row>
                      </ListGroup.Item>
                      Choose your payment method
                      <ListGroup.Item>
                        <Row>
                          <Col md="3">
                            <Button className="m-t-20" variant="light">
                              Debit Card
                            </Button>
                            <Button className="m-t-20" variant="light">
                              Credit card
                            </Button>
                            <Button className="m-t-20" variant="light">
                              Net Banking
                            </Button>
                            <Button className="m-t-20" variant="light">
                              Google Play
                            </Button>
                          </Col>
                          <Col md="8">
                            <Row className="m-t-30">
                              <Col md="4"> Card Type: </Col>
                              <Col md="8">
                                <Row>
                                  <div>
                                    {" "}
                                    <Form.Check
                                      className="p-l-50"
                                      type="radio"
                                      aria-label="radio 1"
                                    />
                                  </div>
                                  <div>
                                    {" "}
                                    <Form.Check
                                      className="p-l-50"
                                      type="radio"
                                      aria-label="radio 1"
                                    />
                                  </div>
                                  <div>
                                    {" "}
                                    <Form.Check
                                      className="p-l-50"
                                      type="radio"
                                      aria-label="radio 1"
                                    />
                                  </div>
                                </Row>
                              </Col>
                            </Row>
                            <Row className="m-t-30">
                              <Col md="4">Card Number: </Col>
                              <Col md="8">
                                <Form.Control type="number" smal />
                              </Col>
                            </Row>

                            <Row className="m-t-30">
                              <Col md="4">Name on Card </Col>
                              <Col md="8">
                                <Form.Control type="text" smal />
                              </Col>
                            </Row>

                            <Row className="m-t-30">
                              <Col md="4">CVV Number</Col>
                              <Col md="8">
                                <Form.Control type="number" smal />
                              </Col>
                            </Row>
                            <Row className="m-t-30">
                              <Col md="4">Expiry Date</Col>
                              <Col md="8">
                                <Row>
                                  <Col md="6">
                                    <Form.Control
                                      as="select"
                                      placeholder="Month"
                                    >
                                      <option>1</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5</option>
                                    </Form.Control>
                                  </Col>
                                  <Col md="6">
                                    <Form.Control
                                      as="select"
                                      placeholder="Year"
                                    >
                                      <option>1</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5</option>
                                    </Form.Control>
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                        <div onClick={this.toggleRegisterModal}>
                          <div className="verticalhorizontalMiddle m-t-30">
                            <Button variant="secondary"> Pay Now</Button>
                          </div>
                        </div>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
          <ModalComponent
            title="Order successfully placed"
            modal={this.state.modal}
            imageUrl={check}
            description=" Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                           eirmod tempor invidunt ut labore et dolore magna aliquyam"
            toggleModal={this.toggleRegisterModal}
            footerActions={[
              {
                title: "BACK TO HOME PAGE",
                link: "/",
                  }, 
              //     {
              //       title: "test2",
              //       link: "/",
              // },
            ]}
          />
        </div>
      </>
    );
  }
}
