import React from "react";
import { Container, Button, Card } from "react-bootstrap";
import ReactPlayer from "react-player";

import "./syllabus.scss";

import { SDcardworks, LiveDemoAdd, OtherCoursesCard } from "../card/cards";
import Counselingform from "../shared/counselingform";

export default function CourseRightContainer() {
  return (
    <>
      <Container>
        <div className="exam-add ">
          <h4 className="heading center">How Sd Card Works</h4>
          <SDcardworks />
          <Button className="btn-add" variant="secondary">
                    Buy This Course
          </Button>
        </div>
        <div className="exam-add">
          <h4 className="heading center">LiveDemoAdvertisement</h4>
          <LiveDemoAdd />
          <Button className="btn-add" variant="secondary">
                    Book A Live Demo
          </Button>
        </div>

        <div className="counslingContainer">
          <h4 className="heading center">Get Free Counselling</h4>
          <Counselingform />
        </div>

        <div>
          <h4 className="heading center">Buy A Course</h4>
          <Card className="buy-a-course">
            <ReactPlayer

              playingurl='<iframe width="560" height="315" src="https://www.youtube.com/embed/-lUd1RUn-zU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            />
          </Card>
          <div>
            <h4 className="heading center">Free Features On Buying A Course</h4>
            <input
              type="checkbox"
              value="1"
              id="checkboxOneInput"
              name=""
            />
            {" "}
                  videos
            <br />
            <input
              type="checkbox"
              value="1"
              id="checkboxOneInput"
              name=""
            />
            {" "}
                  Sample Test Papers
            <br />
            <input
              type="checkbox"
              value="1"
              id="checkboxOneInput"
              name=""
            />
            {" "}
                  Notes
            <br />
            <input
              type="checkbox"
              value="1"
              id="checkboxOneInput"
              name=""
            />
            {" "}
                  Lectures
            <br />
            <input
              type="checkbox"
              value="1"
              id="checkboxOneInput"
              name=""
            />
            {" "}
                  Skill Development
            <br />
            <input
              type="checkbox"
              value="1"
              id="checkboxOneInput"
              name=""
            />
            {" "}
                  Placement Assistence
            <br />
          </div>
          <Button className="btn-add" variant="secondary">
                   Buy A Course
          </Button>

        </div>

        <div>
          <h4 className="heading center">Other Related Courses</h4>
          <OtherCoursesCard />
        </div>
      </Container>
    </>
  );
}
