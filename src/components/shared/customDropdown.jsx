/* eslint-disable react/forbid-prop-types */
import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";
import "./customDropdown.scss";

export default class CustomDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: this.props.message,
    };
  }

  handleChange = (e) => {
    const { value } = e.target;
    if (value === "default") {
      this.setState({ message: this.props.message });
    } else {
      this.setState({ message: "" });
    }

    this.props.onChange(e);
  };

  render() {
    return (
      <Form.Group
        className={`customDropdown ${this.props.className}`}
        controlId="formGridState"
      >
        <Form.Control
          as="select"
          className="blueBorder"
          value={this.props.value}
          onChange={this.handleChange}
        >
          <option value="default">{this.props.defaultValue}</option>
          {this.props.options.map((i) => (<option value={i.value}>{i.label}</option>))}
        </Form.Control>
        {this.props.validate ? (
          <span className="errorMessage">{this.state.message}</span>
        ) : (
          ""
        )}
      </Form.Group>
    );
  }
}

CustomDropdown.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  message: PropTypes.string,
  validate: PropTypes.bool,
  options: PropTypes.array.isRequired,
  defaultValue: PropTypes.string.isRequired,
};

CustomDropdown.defaultProps = {
  className: "",
  message: "Please enter value",
  validate: false,
};
