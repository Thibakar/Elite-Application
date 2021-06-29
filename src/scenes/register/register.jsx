import React from "react";
import {
  Row, Col, Button, Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import _ from "lodash-es";

import FloatingInput from "../../components/shared/floatingInput";
import CustomDropdown from "../../components/shared/customDropdown";
import LoginCarousel from "../../components/loginCarousel/loginCarousel";

import "bootstrap/dist/css/bootstrap.css";
import "./register.scss";
import elitereglogo2 from "../../assets/images/elitelogo.png";


const options = [
  { value: "UCE", label: "UCE" },
  { value: "UCG", label: "UCG" },
  { value: "BE subjects", label: "BE subjects" },
];
const options1 = [
  { value: "HRM", label: "HRM" },
  { value: "Management", label: "Management" },
  { value: "commerce", label: "commerce" },
];
export default class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      email: null,
      phonenum: null,
      course: null,
      isvalid: false,
      formErrors: {
        name: "please enter Name",
        email: " please enter Email",
        phonenum: "Please enter Phone Number",
        course: "please select Course",
      },
    };
  }

  handleChangeInput = (inputLabel, e) => {
    this.setState({ [inputLabel]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ isvalid: true });
  };

  render() {
    return (
      <Row className="divoverflow">
        <Col sm="6" md="6">
          <LoginCarousel />
        </Col>

        <Col sm="6" md="6">
          <Container>

            <div className="Register-right-container">
              <div className="verticalhorizontalMiddle  m-b-35 ">
              <Link to="/dashboard">
                <img src={elitereglogo2} alt="" />
              </Link>
              </div>
              <h2 className="verticalhorizontalMiddle fontSize"><b>Welcome to Elite</b></h2>
              <p className="headingAlign">signup and start learning </p>
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
                validationType="email"
                type="email"
                label="Email"
                onChange={() => _.partial(this.handleChangeInput, "email")}
                value={this.state.email}
                validate={this.state.isvalid}
                message="Please enter Valid Email"
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
              <div className="row">
                <div className="col-md-6">
                  <CustomDropdown
                    label="course"
                    onChange={() => _.partial(this.handleChangeInput, "course")}
                    value={this.state.course}
                    validate={this.state.isvalid}
                    options={options}
                    defaultValue="Select Course"
                    message="Please select the course name"
                  />
                </div>

                <div className="col-md-6">
                  <CustomDropdown
                    label="course"
                    onChange={() => _.partial(this.handleChangeInput, "course")}
                    value={this.state.course}
                    validate={this.state.isvalid}
                    options={options1}
                    defaultValue="Select Sub Course"
                    message="Please select the course name"
                  />
                </div>
              </div>
              <FloatingInput
                validationType="text"
                type="text"
                label="location(optional)"
                onChange={() => _.partial(this.handleChangeInput, "name")}
                // value={this.state.name}
                // validate={this.state.isvalid}
                // message="Please enter Valid Name"
              />
              <Button
                type="submit"
                onClick={this.handleSubmit}
                className="btn-primary"
                variant="secondary"
                block
              >
                SUBMIT AND GET OTP
              </Button>
              {/* </Form> */}

              <div className="colorBlack">
                Already have an account?
                <a href="login">
                  <b> LOGIN</b>
                </a>
              </div>
            </div>
          </Container>
        </Col>
      </Row>
    );
  }
}
