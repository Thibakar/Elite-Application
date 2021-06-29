import React, { Component } from "react";
import { Container, Row, Button } from "react-bootstrap";
import PropTypes from "prop-types";

import CarouselPage from "../carousel/carousel";
import { BuyaCourseCard } from "../card/cards";
import Breadcrumb from "../shared/Breadcrumb";

import "./buyCourse.scss";

export default class BuyaCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [
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
        {
          title: "DCET",
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
          btnName: " Learn More",
        },
      ],
    };
  }

  PushList = () => {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.history.push("courseList");
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
      <>
        <div>
          <Row>
            <Container>
              <Breadcrumb items={items} />
            </Container>
          </Row>

          <CarouselPage />
        </div>
        <div>
          <Container>
            <div className="testimonial m-t-30">
              <h1>Courses We Offer</h1>
              <Row>
                {this.state.courses.map((i) => (
                  <BuyaCourseCard PushList={this.PushList} courses={i} />
                ))}
              </Row>
            </div>
            <div className="btn-center">
              <Button variant="white">View All</Button>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

BuyaCourse.propTypes = {
  history: PropTypes.func.isRequired,
};
