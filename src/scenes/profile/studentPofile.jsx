import React from "react";
import {
  Container, Button, Row, Col,
} from "react-bootstrap";
import _ from "lodash-es";

import CustomDropdown from "../../components/shared/customDropdown";
import "./studentProfile.scss";

const options = [
  { value: "UCE", label: "UCE" },
  { value: "UCG", label: "UCG" },
  { value: "BE subjects", label: "BE subjects" },
];

export default class StudentProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      email: null,
      phonenum: null,
      course: null,
      isvalid: false,
      formErrors: {
        name: "please enter Name",
        email: " please enter Email",
        phonenum: "Please enter Phone Number",
        course: "please select Course",
      },
      studprofile: [
        {
          label1: "Name",
          studname: "Rahul Kumar Sharma",
        },
        {
          label1: "DOB",
          studname: "14-November-1991",
        },
        {
          label1: "Mail ID",
          studname: "rahul@gmail.com",
        },
        {
          label1: "Moblie No",
          studname: "9876543210",
        },
        {
          label1: "Address",
          studname: "KR Puram Bangalore",
        },
        {
          label1: "Class/University",
          studname: "Prist University",
        },
      ],
    };
  }

  render() {
    return (
      <>
        <Container>
          <Row>
            <Col md="6">
              <div className=" student-profile m-b-30 ">
                <div className="profileContainer  ">
                  <img
                    src={require("../../assets/images/carouselimg.png")}
                    className="rounded-circle "
                    alt="Cinque Terre"
                  />

                  <span className="profileEdit">
                    <i className="fa fa-pencil" aria-hidden="true" />
                  </span>
                </div>

                <h2 className="m-t-20"> Rahul Kumar Sharma</h2>

                <CustomDropdown
                  className="stud-drop m-t-20"
                  label="course"
                  onChange={() => _.partial(this.handleChangeInput, "course")}
                  value={this.state.course}
                  validate={this.state.isvalid}
                  options={options}
                  defaultValue="DCET Management"
                  message="Please select the course name"
                />

                <Button className="stud-login m-t-20" variant="success">
                  LOGOUT
                </Button>
              </div>
            </Col>

            <Col md="6 m-b-30" className="m-t-40 personal-deatails">
              <Row>
                <Col>
                  <h2 className="colorBlueGreen ">Personal details</h2>
                </Col>
                <Col>
                  <Row>
                    <i className="fa fa-pencil m-l-30  " aria-hidden="true" />
                    <h2 className="colorBlueGreen m-l-10 ">Edit</h2>
                  </Row>
                </Col>
              </Row>
              <Row className="">
                {this.state.studprofile.map((i) => (
                  <>
                    <Col md="3">
                      <div className=" stud-label1 m-t-20">{i.label1}</div>
                    </Col>
                    <Col md="9">
                      <div className="  stud-label2  m-t-20">{i.studname}</div>
                    </Col>
                  </>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
