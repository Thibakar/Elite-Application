import React from "react";
import {
  Row, Col, Button, Container,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedoAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import _ from "lodash-es";
import LoginCarousel from "../../components/loginCarousel/loginCarousel";
import FloatingInput from "../../components/shared/floatingInput";

import "bootstrap/dist/css/bootstrap.css";
import "./loginOTP.scss";

import elite1 from "../../assets/images/elitelogo.png";

export default class LoginOTP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phonenum: null,
      isvalid: false,
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
        <Col md="6">
          <LoginCarousel />
        </Col>
        <Col md="6">
          <Container>
            <div className="OTP-right-Section">
              <div className="logo-Section">
                <div className="verticalhorizontalMiddle  m-b-50">
                  <Link to="/dashboard">
                    <img src={elite1} alt="elite" />
                  </Link>
                </div>
                <div className="text-center" />
                <h2 className="verticalhorizontalMiddle"><b>Welcome Back ! Rahul </b></h2>
                <p className="verticalhorizontalMiddle m-t-10 colorDarkGray m-l-12 m-b-5">
                  We have sent on OTP to +91-9854367823
                  {" "}
                </p>
              </div>
              <div className="OTPAlign p-t-45">
                <FloatingInput
                  validationType="otp"
                  type="number"
                  label="Enter Your OTP Received"
                  onChange={() => _.partial(this.handleChangeInput, "phonenum")}
                  value={this.state.phonenum}
                  validate={this.state.isvalid}
                  message="Otp should be 4 digit"
                />
                {/* <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    className="custom-Input-Border m-l-15"
                    type="number"
                    placeholder="Enter your OTP Received"
                  />

                </Form.Group> */}
                <Button
                  className="btn-primaryLogin"
                  onClick={this.handleSubmit}
                  variant="secondary"
                  block
                >
                  VERIFY&LOGIN
                </Button>
              </div>
              {/* </Form> */}
              <div className=" p-t-15 resendAlign">
                <FontAwesomeIcon icon={faRedoAlt} />
                &nbsp;RESEND
              </div>
            </div>
          </Container>
        </Col>
      </Row>
    );
  }
}
