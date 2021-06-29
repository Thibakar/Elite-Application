/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable lines-between-class-members */
import React, { Component } from "react";
import PropTypes from "prop-types";
import "./testQuestions.scss";
import Radio from "../input/radio";

class TestAnswer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

 


  render() {
    return (
      <div className="quiz-question-container">
        <div className="quiz-question-header-wrapper d-flex">
          <h3>Q{this.props.count} </h3>
          <span className="quiz-question-header">{this.props.contents}</span>
        </div>
        <div className="quiz-options d-flex">
          <Radio
            value="home"
            name="address_type"
            label="Option A"
            className="answer-check-radio"
            //   onChange={event => {
            //     this.onInputChange(event);
            //   }}
            isChecked={() => {
              // return this.state.question.value == "home";
            }}
          />
          <Radio
            value="home"
            name="address_type"
            label="Option B"
            className="answer-check-radio"
            //   onChange={event => {
            //     this.onInputChange(event);
            //   }}
            isChecked={() => {
              // return this.state.question.value == "home";
            }}
          />
          <Radio
            value="home"
            name="address_type"
            label="Option C"
            className="answer-check-radio"
            //   onChange={event => {
            //     this.onInputChange(event);
            //   }}
            isChecked={() => {
              // return this.state.question.value == "home";
            }}
          />
          <Radio
            value="home"
            name="address_type"
            label="Option D"
            className="answer-check-radio"
            //   onChange={event => {
            //     this.onInputChange(event);
            //   }}
            isChecked={() => {
              // return this.state.question.value == "home";
            }}
          />
        </div>
      </div>
    );
  }
}

TestAnswer.propTypes = {
  count: PropTypes.string,
  contents: PropTypes.string,
  answerType: PropTypes.string,
};

export default TestAnswer;
