/**
 * Copyright © REFIXD TECHNOLOGIE PVT LTD. - All Rights Reserved
 * -------------",
 * This file is part of REFIXD.
 * -------------
 * Authors: Chandra shekhar <chandrashekhar@refixd.com>.
 */

import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  Row,
  Button,
  Container,
  Col,
  Modal,
  Form,
} from "react-bootstrap";
import _ from "lodash-es";
import PropTypes from "prop-types";
import FloatingInput from "../floatingInput";
import CustomDropdown from "../customDropdown";
import "./header.scss";

import icon from "../../../assets/images/White bag.svg";
import logo from "../../../assets/images/elitelogo.svg";
import user from "../../../assets/icons/user.png";
import Topmenu from "../topMenu";

const options = [
  { value: "UCE", label: "UCE" },
  { value: "UCG", label: "UCG" },
  { value: "BE subjects", label: "BE subjects" },
];
const options1 = [
  { value: "bangalore", label: "bangalore" },
  { value: "hyderabed", label: "hyderabed" },
  { value: "chennai", label: "chennai" },
];

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name: null,
      phonenum: null,
      email: "",
      selectedOption: null,
      city: null,
      isvalid: false,
      formErrors: {
        name: "please enter Name",
        phonenum: "Please enter Phone Number",
        email: " please enter Email",
        course: "please select Course",
        city: "please select City",
      },
    };
  }

  handleChangeInput = (inputLabel, e) => {
    this.setState({ [inputLabel]: e.target.value });
  };

  handleChange = (selectedOption) => {
    this.setState({ selectedOption }, () => console.log("Option selected:", this.state.selectedOption));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ isvalid: true });
  };

  toggleRegisterModal = () => {
    this.setState({ modal: !this.state.modal });
  };

  studentProfile = () => {
    this.props.history.push("studentProfile");
  }

  render() {
    return (
      <div className="Header">
        <Navbar expand="lg">
          <Navbar.Brand>
            <Link to="/dashboard">
              <img className="elite-logo" src={logo} alt="" />
            </Link>
          </Navbar.Brand>
          <div className="headerRightAlign">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <div className="SearchBox">
                  <a href="#home">
                    <Form.Group
                      className="searchInput"
                      controlId="formBasicSearch"
                    >
                      <Form.Control
                        type="search"
                        placeholder="Search Courses, Exams, Topics, Syllabus"
                        className="input"
                      >
                      </Form.Control>
                      <p className="searchBar">
                        <i className="fa fa-search" aria-hidden="true" />
                      </p>

                      {/* <Button className="btn1 no-margin" variant="success"> */}
                      {/* <img src={search} alt="" /> */}
                      {/* </Button> */}
                    </Form.Group>
                  </a>
                </div>
                <Nav.Link href="#link">
                  <div className="phoneSection" variant="light">
                    <Row>
                      <Col md="1">
                        <i className="fa fa-phone" aria-hidden="true" />
                      </Col>
                      <Col>
                        <span className="freeCounseling">FREE COUNSELING</span>

                        <span className="phNumber">987654321</span>
                      </Col>
                    </Row>
                  </div>
                </Nav.Link>
                <div className="profileSection ">
                  <div className="ManagementAlign">
                    <h3>Rahul Sharma</h3>
                    <p>
                      DCET,
                      <span>Management</span>
                    </p>
                  </div>
                  <div className="profileImage">
                    <a onClick={this.studentProfile} href="studentProfile">
                      <img
                        src={user}
                        alt="cannot display"
                      />
                    </a>
                  </div>
                </div>
                {/* <div className="LoginLink">
                  <a className="LoginLink" href="login">
                    <b>LOGIN</b>
                  </a>
                </div> */}
                {/* <Nav.Link href="#link">
                  <div onClick={this.toggleRegisterModal}>
                    <Button className="registerBtn">
                      REGISTER FOR FREE
                </Button>
                  </div>
                </Nav.Link> */}

                <Modal
                  show={this.state.modal}
                  onHide={this.toggleRegisterModal}
                >
                  <div className="Model_Content">
                    <Container>
                      <Modal.Header className="header-border" closeButton>
                        <Modal.Title className="register-size p-t-10  p-l-25">
                          <b>Register For A Free Counselling</b>
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <FloatingInput
                          validationType="text"
                          type="text"
                          label="Name"
                          onChange={() => _.partial(this.handleChangeInput, "name")}
                          value={this.state.name}
                          validate={this.state.isvalid}
                          message="Please enter Valid Name"
                        />

                        <FloatingInput
                          validationType="phone"
                          type="number"
                          label="Phone Number"
                          onChange={() => _.partial(this.handleChangeInput, "phonenum")}
                          value={this.state.phonenum}
                          validate={this.state.isvalid}
                          message="Please enter Valid Phone Number"
                        />

                        <FloatingInput
                          validationType="email"
                          type="email"
                          label="Email"
                          onChange={() => _.partial(this.handleChangeInput, "email")}
                          value={this.state.email}
                          validate={this.state.isvalid}
                          message="Please enter Valid Email"
                        />
                        <CustomDropdown
                          onChange={() => _.partial(this.handleChangeInput, "course")}
                          value={this.state.course}
                          validate={this.state.isvalid}
                          options={options}
                          defaultValue="Select Course"
                          message="Please select the course name"
                          className="m-t-30"
                        />
                        <CustomDropdown
                          onChange={() => _.partial(this.handleChangeInput, "city")}
                          value={this.state.city}
                          validate={this.state.isvalid}
                          options={options1}
                          defaultValue="Select City"
                          message="Please select the City name"
                          className="m-t-30"
                        />
                        <div className="verticalhorizontalMiddle">
                          <Button
                            type="submit"
                            onClick={this.handleSubmit}
                            className="m-t-30 model-btn  p-l-50 p-r-50"
                          >
                            <b>SUBMIT AND GET A CALL</b>
                          </Button>
                        </div>

                        {/* </Form> */}
                        <h1 className="verticalhorizontalMiddle p-t-20">
                          <b>0R</b>
                        </h1>
                        <h2 className="verticalhorizontalMiddle p-t-20 m-b-45">
                          <b>You Can Call Us On +91 9876543210</b>
                        </h2>
                      </Modal.Body>
                    </Container>
                  </div>
                </Modal>

                {/* <Nav.Link className="cartBackground"  href="cart">
                <img className="head-icon" src={icon} alt="headericon" />
                <span className="badge badge-danger">9</span>
                <span className="sr-only">unread messages</span>
              </Nav.Link> */}
                <div className="cartBackground">
                  <a href="cart">
                    <img className="head-icon" src={icon} alt="headericon" />
                    <span className="badge badge-danger">9</span>
                  </a>
                </div>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>

        <div className="colorLightBlue">
          <Container>
            <Navbar className="justify-content-end">
              <div className="full-width">
                <h3>Hi Rahul, Welcome to Elite Learning!!! </h3>
              </div>
              <div className="navRightSection1">
                <Topmenu />
              </div>
            </Navbar>
          </Container>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  history: PropTypes.func.isRequired,
};
