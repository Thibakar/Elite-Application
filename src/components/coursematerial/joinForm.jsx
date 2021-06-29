/* eslint-disable jsx-a11y/no-autofocus */
import React, { Component } from "react";

import { Button } from "react-bootstrap";

import "./joinForm.scss";

export default class JoinForm extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    name: "",
    mobileno: "",
    emailid: "",
    location: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    // handle form processing here....
  };

  render() {
    const {
      name, mobileno, emailid, location,
    } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h5 className="form-heading">Join Elite IAS Learning Program</h5>
          <div className="form-group">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              value={name}
              onChange={this.onChange}
              
            />
            <span className="help-block" />
          </div>

          <div className="form-group">
            <input
              type="number"
              name="mobileno"
              className="form-control"
              placeholder="Mobile No"
              value={mobileno}
              onChange={this.onChange}
            />
            <span className="help-block" />
          </div>

          <div className="form-group">
            <input
              type="mail"
              name="emailid"
              className="form-control"
              placeholder="Email Id"
              value={emailid}
              onChange={this.onChange}
            />

            <span className="help-block" />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="location"
              className="form-control"
              placeholder="Location"
              value={location}
              onChange={this.onChange}
            />
            <Button className="submit-btn" variant="success">
              {" "}
              SUBMIT
            </Button>
            <span className="help-block" />
          </div>
        </form>
      </div>
    );
  }
}
