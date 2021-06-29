import React, { Component } from "react";
import { Table } from "react-bootstrap";

export default class Examoverview extends Component {
  constructor() {
    super();
    this.state = {
      examoverview: [
        {
          title: "Exam Name",
          description: "Lorem ipsum dolor sit amet, consetetur sadips",
        },


      ],
    };
  }

  render() {
    return (
      <div>
        {this.state.examoverview.map((i) => (
          <Table>
            <tbody>
              <tr>
                <td>{i.title}</td>
                <td>{i.description}</td>
              </tr>
              <tr>
                <td>{i.title}</td>
                <td>{i.description}</td>
              </tr>
              <tr>
                <td>{i.title}</td>
                <td>{i.description}</td>
              </tr>
              <tr>
                <td>{i.title}</td>
                <td>{i.description}</td>
              </tr>
              <tr>
                <td>Total Seats</td>
                <td>Lorem ipsum dolor sit amet, consetetur sadips</td>
              </tr>
              <tr>
                <td>Course Offered</td>
                <td>Lorem ipsum dolor sit amet, consetetur sadips</td>
              </tr>
            </tbody>
          </Table>
        ))}
      </div>
    );
  }
}
