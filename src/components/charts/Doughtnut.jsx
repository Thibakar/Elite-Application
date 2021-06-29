import React, { Component } from "react";

import { Doughnut } from "react-chartjs-2";

export default class DoughnutChart extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        datasets: [
          {
            backgroundColor: [
              "#a598fc",
              "#defc98",
              "#98fceb",
              "#98fc98",
              "#e998fc",
            ],
            data: [50, 42, 38, 28, 12],
            label: ["chapter1"],
          },
        ],
      },
    };
  }

  render() {
    return (
      <Doughnut
        data={this.state.data}
        options={{
          responsive: true,
          maintainAspectRatio: true,
        }}
      />
    );
  }
}
