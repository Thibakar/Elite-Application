import React from "react";
import { Link } from "react-router-dom";

import { Table } from "react-bootstrap";

export default function Examcalender() {
  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th>Event</th>
            <th>Date</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Registration of the Exam</td>
            <td>20 - Jan - 2020</td>
            <td>
              <Link className="goto" path="">
                <p className="colorBlue"> Registration Link</p>
              </Link>
              {" "}
            </td>
          </tr>
          <tr>
            <td>Lorem ipsum dolor sit amet, consetetur sadips</td>
            <td>20 - Jan - 2020</td>
            <td>
              <Link className="goto" path="#">
                <p className="colorBlue"> Registration Link</p>
              </Link>
              {" "}
            </td>
          </tr>
          <tr>
            <td>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            </td>
            <td>20 - Jan - 2020</td>
            <td>
              <Link className="goto" path="#">
                <p className="colorBlue"> Registration Link</p>
              </Link>
              {" "}
            </td>
          </tr>
          <tr>
            <td>Lorem ipsum dolor sit amet, consetetur sadips</td>
            <td>20 - Jan - 2020</td>
            <td>
              <Link className="goto" path="#">
                <p className="colorBlue"> Registration Link</p>
              </Link>
              {" "}
            </td>
          </tr>
          <tr>
            <td>Lorem ipsum dolor sit amet, consetetur sadips</td>
            <td>20 - Jan - 2020</td>
            <td>
              <Link className="goto" path="#">
                <p className="colorBlue"> Registration Link</p>
              </Link>
              {" "}
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
