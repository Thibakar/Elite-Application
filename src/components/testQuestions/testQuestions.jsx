/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from "react";
import PropTypes from "prop-types";
import "./testQuestions.scss";
import BookmarkIcon from "../../assets/icons/bookmark.svg";
import Button1 from "../buttons/button1";
import TestAnswer from "./testAnswer";
import ModalComponent from "../shared/modal";

class TestQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      data: [
        {
          id: 1,
          q: 1,
          contentsHead: "Lorem ipsum ?",
          bookmark: false,
        },
        // eslint-disable-next-line react/no-unused-state
        {
          id: 2,
          q: 2,
          contentsHead: "Lorem ipsum  q2?",
          bookmark: false,
        },
        // eslint-disable-next-line react/no-unused-state
        {
          id: 3,
          q: 3,
          contentsHead: "Lorem ipsum q3 ?",
          bookmark: false,
        },
      ],
      // total: length,
      showButton: false,
      modal: false,
      step: 0,
      isEnd: false
    };
  }


  getQuestion() {
    if (this.state.step < this.state.data.length - 1 ) {
      return this.state.data.map((ele) => (
        <div className="text-question">
          <TestAnswer count={ele.q} contents={ele.contentsHead} />
        </div>
      ));
    }
    return "No Questions Available";
  }

  toggleEndTestModal = () => {
    this.setState({ modal: !this.state.modal });
  };

  nextStep() {
    this.setState({ step: this.state.step + 1 });
  }

  render() {
    return (
      <>
        <div className="questions-container">
          <div className="questions-header-wrapper d-flex">
            <h3>{this.props.headerName}</h3>
            <span className="quiz-question-header">
              {this.props.sectionName}{" "}
            </span>
          </div>
          <div className="questions-time-info d-flex">
            <h3>{this.props.timeInfo} </h3>
            <span className="questions-time-countdown"> 29.00 min</span>
          </div>
          <div className="questions-btn">
            <div className="btn-wrapper">
              <Button1
                classes="end-test-btn"
                name="End Test"
                onClick={this.toggleEndTestModal}
              />
            </div>
            <div className="bookmark-container">
              <img src={BookmarkIcon} alt="custom-bookmark" />
            </div>
          </div>
          <hr />
          <div className="text-question">{this.getQuestion()}</div>
        </div>
        <div className="custom-shadow quiz-btn-next">
          {this.state.step < this.state.data.length - 1 ? (
            ((<Button1 classes="previous-test-btn" name="Previous" disabled />),
            (<Button1 classes="end-test-btn  m-l-25" name="Next" />))
          ) : (
            <Button1
              classes="end-test-btn  m-l-25"
              name="Next"
              // onClick={this.nextQuestion()}
            />
          )}
        </div>
        <ModalComponent
          title="You Are 3 Questions Away to
            Complete Practice"
          modal={this.state.modal}
          // imageUrl={check}
          description=" Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                           eirmod tempor invidunt ut labore et dolore magna aliquyam"
          toggleModal={this.toggleEndTestModal}
        />
      </>
    );
  }
}

TestQuestions.propTypes = {
  headerName: PropTypes.string.isRequired,
  sectionName: PropTypes.string,
  timeInfo: PropTypes.string,
  // eslint-disable-next-line react/no-unused-prop-types
  id: PropTypes.string.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  contentsHead: PropTypes.string,
};

export default TestQuestions;
