import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Accordion,
  Modal,
} from "react-bootstrap";
import PropTypes from "prop-types";

import elitereg1 from "../../assets/images/carouselimg.png";
import Breadcrumb from "../shared/Breadcrumb";
import "./coursedetails.scss";

export default class Coursedetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        heading: "IIT-JAM,(Maths)",
        productType: "SD Card+Live class",
        price: 20000,
      },
      modal: false,
    };
  }

  toggleRegisterModal = () => {
    this.setState({ modal: !this.state.modal });
  };

  buyNow = () => {
    this.props.history.push("buyNow");
  };

  goCart = () => {
    this.props.history.push("cart");
  };

  render() {
    const items = [
      {
        url: "dashboard",
        label: "Home",
      },
      {
        url: "",
        label: "Buy A Course",
      },
      {
        url: "",
        label: "IIT-JAM",
      },
      {
        url: "",
        label: "Maths",
      },
    ];

    return (
      <div className="container-fluid">
        <Row>
          <Container>
            <Breadcrumb items={items} />
          </Container>
        </Row>

        <Container>
          <div>
            <h1>In IIT-JAM,</h1>
            <Row>
              <Col md="6">
                <div className="center">
                  <Card className="cousre-img " />
                </div>
              </Col>
              <Col md="6">
                <Row>
                  <h1 className="m-t-10">IIT-JAM, Maths</h1>
                  <p className=" course-fee"> ₹ 20,000.00</p>
                </Row>
                <p className="heading">Product</p>
                <Form.Control className="big-btn" as="select">
                  <option>SD Card + Live Class</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
                {" "}
                <div onClick={this.toggleRegisterModal}>
                  <Button className="big-btn" variant="light" block>
                    ADD TO BAG
                  </Button>
                </div>
                <div>
                  <Modal
                    backdrop={false}
                    dialogClassName="customModal"
                    show={this.state.modal}
                    onHide={this.toggleRegisterModal}
                  >
                    <Modal.Header closeButton>
                      <h2 className="bagHeading">Added To Your Bag</h2>
                    </Modal.Header>

                    <Modal.Body>
                      <div>
                        <Row className="modelContent">
                          <Col md="4">
                            <img
                              className="AddimageWidth"
                              src={elitereg1}
                              alt=""
                            />
                          </Col>
                          <Col md="8">
                            <h3>{this.state.options.heading}</h3>
                            <p className="product-size">product type</p>
                            <h5 className="p-b-5 margin-0 sd-size">
                              {this.state.options.productType}
                            </h5>
                            <br />
                            &#x20B9;
                            {" "}
                            {this.state.options.price}
                            <p>Selected batch ID.E12345</p>
                          </Col>
                        </Row>

                        <p
                          className="m-l-20 m-t-10 btnBackground"
                          size="lg"
                          variant="light"
                        >
                          VIEW BAG (2)
                        </p>
                      </div>
                    </Modal.Body>
                  </Modal>
                </div>
                {" "}
                <Button
                  className="big-btn"
                  variant="light"
                  block
                  onClick={this.buyNow}
                >
                  {/* <Link className="goto" to="buyNow"> */}
                  BUY NOW
                  {/* </Link> */}
                </Button>
              </Col>
            </Row>
          </div>
          <div>
            <p className="heading">Product Description </p>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum
            </p>
          </div>
          <div className="division">
            <Accordion defaultActiveKey="">
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  <Row>
                    <p className="text-1">IIT-JAM, Maths </p>
                    <p className="text-2">(SD CARD)</p>

                    <p className="text-2 collapse-right">
                      15 videos| 10 tests | 15 prctices | 20 Notes
                    </p>
                  </Row>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>Hello! I am the body</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card />
            </Accordion>
          </div>

          <div className="division">
            <Accordion defaultActiveKey="">
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  <Row>
                    <p className="text-1">IIT-JAM, Maths </p>
                    <p className="text-2"> (Live Class)</p>
                    <p className="text-2 collapse-right">
                      15 videos| 10 tests | 15 prctices | 20 Notes
                    </p>
                  </Row>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>Hello! I am the body</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card />
            </Accordion>
          </div>
          <div>
            <h1>FAQs (Frequently Asked Questions)</h1>
            <p className="heading">
              Q.Lorem ipsum dolor sit amet, consetetur ?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum
            </p>
            <p className="heading">
              Q.Lorem ipsum dolor sit amet, consetetur ?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum
            </p>
          </div>
          <div>
            <h1>You May Also Like</h1>
            {/* {this.state.courses.map((i) =>
              <BuyaCourseCard PushList={this.PushList} courses={i} />)} */}
          </div>
          <div className="center text-black ">
            <Button variant="link">
              <a className="text-black " href="buyacourse">
                BACK TO HOME
              </a>
            </Button>
          </div>
        </Container>
      </div>
    );
  }
}

Coursedetails.propTypes = {
  history: PropTypes.func.isRequired,
};
