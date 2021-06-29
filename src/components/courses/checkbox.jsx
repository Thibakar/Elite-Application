import React, { Component } from "react";

export default class Checkbox extends Component {
  constructor() {
    super();


    this.state = {
      rememberMe: false,
    };
  }

  handleCheck = (event) => {
    this.setState({ rememberMe: event.target.checked });
  };

  render() {
    return (
      <div>
        <div>
          <p className="sub-head">Nationality</p>
          <hr />
          <input
            type="checkbox"
            checked={this.state.rememberMe}
            onChange={this.handleCheck}
          />
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr
          <br />
          <input
            type="checkbox"
            checked={this.state.rememberMe}
            onChange={this.handleCheck}
          />
          Lorem ipsum dolor sit amet
        </div>

        <div>
          <p className="sub-head">Age</p>
          <hr />
          <input
            type="checkbox"
            checked={this.state.rememberMe}
            onChange={this.handleCheck}
          />
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr
          <br />
          <input
            type="checkbox"
            checked={this.state.rememberMe}
            onChange={this.handleCheck}
          />
          Lorem ipsum dolor sit amet
        </div>

        <div>
          <p className="sub-head">Education</p>
          <hr />
          <input
            type="checkbox"
            checked={this.state.rememberMe}
            onChange={this.handleCheck}
          />
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr
          <br />
          <input
            type="checkbox"
            checked={this.state.rememberMe}
            onChange={this.handleCheck}
          />
          Lorem ipsum dolor sit amet
        </div>
        <div>
          <p className="sub-head">Minimum Marks</p>
          <hr />
          <input
            type="checkbox"
            checked={this.state.rememberMe}
            onChange={this.handleCheck}
          />
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr
          <br />
          <input
            type="checkbox"
            checked={this.state.rememberMe}
            onChange={this.handleCheck}
          />
          Lorem ipsum dolor sit amet
          <br />
          <input
            type="checkbox"
            checked={this.state.rememberMe}
            onChange={this.handleCheck}
          />
          Lorem ipsum dolor sit amet
        </div>
      </div>
    );
  }
}
