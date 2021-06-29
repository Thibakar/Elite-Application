import React from "react";
import { Table } from "react-bootstrap";

import { PieChart as Piechart } from "react-chartkick";
import "chart.js";

export default function PieChart() {
  return (
    <div>
      <Piechart
        className="pie-chart"

        data={[
          ["GN", 55],
          ["OBC", 5],
          ["ST", 14],
          ["SC", 12],
          ["PH", 8],
        ]}
      />

      <Table responsive>
        <thead>
          <tr>
            <th>Category</th>
            <th>Cut Off Marks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>UR</td>
            <td>587</td>
          </tr>
          <tr>
            <td>OBC</td>
            <td>567</td>
          </tr>
          <tr>
            <td>OBC+PH</td>
            <td>350</td>
          </tr>
          <tr>
            <td>SC</td>
            <td>489</td>
          </tr>
          <tr>
            <td>SC+PH</td>
            <td>346</td>
          </tr>
          <tr>
            <td>UR</td>
            <td>587</td>
          </tr>
          <tr>
            <td>UR</td>
            <td>587</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
