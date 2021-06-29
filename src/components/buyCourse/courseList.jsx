import React, { Component } from "react";
import { Row, Container } from "react-bootstrap";
import PropTypes from "prop-types";

import { CourselistCard } from "../card/cards";
import Breadcrumb from "../shared/Breadcrumb";

export default class CourseList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courselist: [
        {
          title: "DCET",
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
          btnName: " Learn More",
        },
        {
          title: "DCET",
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
          btnName: " Learn More",
        },
        {
          title: "DCET",
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
          btnName: " Learn More",
        },
        {
          title: "DCET",
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
          btnName: " Learn More",
        },
        {
          title: "DCET",
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
          btnName: " Learn More",
        },
        {
          title: "DCET",
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
          btnName: " Learn More",
        },

        {
          title: "DCET",
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
          btnName: " Learn More",
        },
      ],
    };
  }

  PushDetails = () => {
    this.props.history.push("courseDetails");
  };

  render() {
    const items = [
      {
        url: "dashboard",
        label: "Home",
      },
      {
        url: "",
        label: "Buy A Course",
      },
    ];
    return (
      <div className="container-fluid">
        <Row>
          <Container>
            <Breadcrumb items={items} />
          </Container>
        </Row>
        <Container>
          <div>
            <h1>6 Result In IIT-JAM</h1>
          </div>
          <div>
            <Row>
              {this.state.courselist.map((i) => (
                <CourselistCard PushDetails={this.PushDetails} courselist={i} />
              ))}
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

CourseList.propTypes = {
  history: PropTypes.func.isRequired,
};
