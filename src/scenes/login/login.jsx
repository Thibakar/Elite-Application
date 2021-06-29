import React from "react";
import {
  Row, Col, Button,
} from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import _ from "lodash-es";
import LoginCarousel from "../../components/loginCarousel/loginCarousel";
import FloatingInput from "../../components/shared/floatingInput";

import "bootstrap/dist/css/bootstrap.css";
import "./login.scss";

import elitereglogo4 from "../../assets/images/elitelogo.png";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phonenum: null,
    };
  }

  onLogin = () => {
    this.props.history.push("loginOTP");
  }

  render() {
    return (
      <Row className="divoverflow">
        <Col md="6">
          <LoginCarousel />
        </Col>
        <Col md="6">
          <div className="login-right-container">
            <div className="login-Margin">
              <div className="login-card">
                <div className="verticalhorizontalMiddle  m-b-50 ">
                  <Link to="/dashboard">
                    <img src={elitereglogo4} alt="" />
                  </Link>
                </div>
                <h2 className="verticalhorizontalMiddle">
                  <b>Welcome Back!</b>
                </h2>
                <h4 className="verticalhorizontalMiddle m-t-10 colorDarkGray m-l-12 m-b-5">
                  Login To Get Started
                  {" "}
                </h4>
              </div>
              <div className=" loginAlignPadding p-t-45">
                <FloatingInput
                  validationType="phone"
                  type="number"
                  label="Enter Your Mobile Number"
                  onChange={() => _.partial(this.handleChangeInput, "phonenum")}
                  value={this.state.phonenum}
                  validate={this.state.isvalid}
                  message="Please enter Valid Phone Number"
                />

                {/* <Form className="login-border-0 m-r-15">
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    className="custom-Input-Border m-l-15"
                    type="number"
                    placeholder="Enter your phone number"
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group> */}

                <Button
                  className="btn-primaryLogin"
                  variant="secondary"
                  block
                  onClick={this.onLogin}
                >
                  GET OTP
                </Button>
              </div>
              {/* </Form> */}
              <div className="account-Padding verticalhorizontalMiddle">
                {" "}
                Dont have an account? &nbsp;
                <a href="Register">
                  <b> REGISTER </b>
                </a>
              </div>

            </div>

          </div>

        </Col>
      </Row>
    );
  }
}

Login.propTypes = {
  history: PropTypes.func.isRequired,
};
