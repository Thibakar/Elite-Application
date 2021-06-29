/* eslint-disable react/jsx-indent */
/* eslint-disable lines-between-class-members */

import React, { Component } from "react";
import "./home.scss";
import PropTypes from "prop-types";

import TestQuestions from "../../../components/testQuestions/testQuestions";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      count: 0,
      // eslint-disable-next-line react/no-unused-state
      showButton: false
    };
  }


  render() {
    return (
      <>
        <div className="custom-container">
          <div className="test-header-container">
            <div className="test-header-text">
              <h1>Quadratic Equations</h1>
            </div>
            <div className="test-header-info">
              <span>Test 1, </span>
              <span>15 Questions, </span>
              <span>30 Min.</span>
            </div>
          </div>
          <div className="custom-shadow bor-5 m-t-20">
            <TestQuestions
              headerName="Quadratic Equations"
              sectionName="Test 1"
              timeInfo="Time:"
            />
            {/* {this.getQuestion()} */}
          </div>
       
        </div>
      </>
    );
  }
}
Home.protoTypes = {
  history: PropTypes.func.isRequired,
};

export default Home;
