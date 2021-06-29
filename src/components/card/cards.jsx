/* eslint-disable max-classes-per-file */
import React from "react";
import {
  Card, Row, Col, Button, Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

import testimonal from "../../assets/icons/testimonal.svg";
import downloadicon from "../../assets/icons/dwnloadicon.svg";
import view from "../../assets/icons/eye-open.svg";
import cardicon1 from "../../assets/images/cardicon.png";
import testimg from "../../assets/images/testimg.png";
import photo from "../../assets/images/photo1.jpg";
import img1 from "../../assets/images/img.jpg";
import img2 from "../../assets/images/doubt.jpg";

import "bootstrap/dist/css/bootstrap.min.css";
import "./card.scss";

export function Liveclass() {
  return (
    <>
      <Card className="live-video">
        <ReactPlayer
          url='<iframe width="560" height="315" src="https://www.youtube.com/embed/-lUd1RUn-zU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
          playing
        />
      </Card>
    </>
  );
}

export function SDcard() {
  return (
    <>
      <Card className="Card-video">
        <ReactPlayer
          url='<iframe width="560" height="315" src="https://www.youtube.com/embed/-lUd1RUn-zU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
          playing
        />
      </Card>
    </>
  );
}

export class CoursesCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSet: [
        {
          title: "Card Title1",
          subTitle: "Lorem ipsum dolor sit amet.",
          link: " Know More",
        },
        {
          title: "Card Title2",
          subTitle: "Lorem ipsum dolor sit amet.",
          link: " Know More",
        },
        {
          title: "Card Title3",
          subTitle: "Lorem ipsum dolor sit amet.",
          link: " Know More",
        },
        {
          title: "Card Title4",
          subTitle: "Lorem ipsum dolor sit amet.",
          link: " Know More",
        },
      ],
    };
  }

  render() {
    return (
      <Row>
        {this.state.dataSet.map((i) => (
          <Card className=" top-course-card">
            <Card.Body>
              <Card.Title>
                <h2>{i.title}</h2>
              </Card.Title>
              <div className="course-text">{i.subTitle}</div>

              <div className="card-icon">
                <img src={cardicon1} alt="" />
              </div>

              <Card.Link className="card-link p-t-30" href="#">
                {i.link}
              </Card.Link>
            </Card.Body>
          </Card>
        ))}
      </Row>
    );
  }
}

// eslint-disable-next-line react/prefer-stateless-function
export class VideoCard extends React.Component {
  render() {
    return (
      <>
        <Card className="video-card m-t-30">
          <ReactPlayer
            url='<iframe  src="https://www.youtube.com/embed/-lUd1RUn-zU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            playing
          />
        </Card>
      </>
    );
  }
}

export class PassedOutStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSet: [
        {
          title: "Card Title",
          name: "Name",
          subject: "AIR 1, Subject(2019)",
          details: "I studied in elite lore ree lore cipsum dolo ame.",
        },
        {
          title: "Card Title",
          name: "Name",
          subject: "AIR 2, Subject(2019)",
          details: "I studied in elite lore ree lore cipsum dolo ame.",
        },
        {
          title: "Card Title",
          name: "Name",
          subject: "AIR 3, Subject(2019)",
          details: "I studied in elite lore ree lore cipsum dolo ame.",
        },
        {
          title: "Card Title",
          name: "Name",
          subject: "AIR 4, Subject(2019)",
          details: "I studied in elite lore ree lore cipsum dolo ame.",
        },
      ],
    };
  }

  render() {
    return (
      <Row>
        {this.state.dataSet.map((i) => (
          <Card className="student-card">
            <Card.Body>
              <Card.Title>
                <h2>{i.title}</h2>
              </Card.Title>

              <div className="card-img">
                <img src={photo} alt="" />
              </div>
              <h7>{i.name}</h7>
              <div className="stud-sub">{i.subject}</div>
              <hr />
              <p className="stud-details">{i.details}</p>
            </Card.Body>
          </Card>
        ))}
      </Row>
    );
  }
}

export class TestimonalCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "name",
          designation: "designation",
          description:
            " Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna.",
        },
        {
          name: "name",
          designation: "designation",
          description:
            " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna.",
        },
      ],
    };
  }

  render() {
    return (
      <Row>
        {this.state.data.map((i) => (
          <Card className="testi-card">
            <Card.Body>
              <div>
                <Row>
                  <Col>
                    <img src={testimonal} alt="testimonial" />
                  </Col>
                  <img className="test-img" src={testimg} alt="" />
                  {i.name}
                  <br />
                  {i.designation}
                </Row>
              </div>

              <p className="testimonial-text m-t-20">{i.description}</p>
            </Card.Body>
          </Card>
        ))}
      </Row>
    );
  }
}

export function SubjectCard(props) {
  return (
    <Row>
      <Card className="subj-card m-l-50">
        <Card.Body>
          <Card.Title>{props.data.title}</Card.Title>
          <p>{props.data.subjectname}</p>
          <p>{props.data.content}</p>
          <Row>
            <Button
              disabled={props.isDisabled}
              className="dwn-btn"
              variant="success"
            >
              <img src={downloadicon} alt="" />
            </Button>
            <Button
              disabled={props.isDisabled}
              className="dwn-btn"
              variant="success"
            >
              <img src={view} alt="" />
            </Button>
          </Row>
        </Card.Body>
      </Card>
    </Row>
  );
}

export function PracticesCard(props) {
  return (
    <Row>
      <Container>
        <Card className="practices-card m-l-20">
          <Card.Body>
            <Card.Title>
              <h2>{props.Practice.title}</h2>
              <h6>{props.Practice.Subtitle}</h6>
            </Card.Title>

            <p>{props.Practice.content}</p>
            <Row>
              <Button
                disabled={props.isDisabled}
                className="dwn-btn"
                variant="success"
              >
                <img src={downloadicon} alt="" />
              </Button>
              <Button
                disabled={props.isDisabled}
                className="dwn-btn"
                variant="success"
              >
                <img src={view} alt="" />
              </Button>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </Row>
  );
}

// eslint-disable-next-line react/prefer-stateless-function
export class AddCard extends React.Component {
  render() {
    return (
      <div>
        <Card className="add-card">
          <Card.Body>
            <img className="add-img" src={img1} alt="" />
            <p className="add-text">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            </p>
            <Button className="add-btn" variant="success">
              REGISTER FOR FREE
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export class DoubtCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doubtcard: [
        {
          content:
            " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
          btnText: " ASK DOUBT",
        },
      ],
    };
  }

  render() {
    return (
      <>
        {this.state.doubtcard.map((i) => (
          <Card className="ques-card">
            <Card.Body>
              <img className="doubt-img" src={img2} alt="" />
              <p className="add-text">{i.content}</p>
              <Button className="add-btn" variant="success">
                {i.btnText}
              </Button>
            </Card.Body>
          </Card>
        ))}
      </>
    );
  }
}

export function SDcardworks() {
  return (
    <Card className="SDcard-add">
      <ReactPlayer
        url='<iframe width="560" height="315" src="https://www.youtube.com/embed/-lUd1RUn-zU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        playing
      />
    </Card>
  );
}

export function LiveDemoAdd() {
  return (
    <Card className="livedemo-add">
      <ReactPlayer
        url='<iframe width="560" height="315" src="https://www.youtube.com/embed/-lUd1RUn-zU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        playing
      />
    </Card>
  );
}

export function BuyaCourseCard(props) {
  return (
    <Card className="buy-a-course-card testimonial m-l-30">
      <Card.Body>
        <Card.Title>
          <h2>{props.courses.title}</h2>
        </Card.Title>
        <Card.Text>
          <p>{props.courses.content}</p>
        </Card.Text>

        <Button className="btn-white" variant="light" onClick={props.PushList}>
          {/* <a href="/courseList"> */}
          {props.courses.btnName}
          {/* </a> */}
        </Button>
      </Card.Body>
    </Card>
  );
}

export function CourselistCard(props) {
  return (
    <Card className="buy-a-course-card testimonial m-l-30">
      <Card.Body>
        <Card.Title>
          <h2>{props.courselist.title}</h2>
        </Card.Title>
        <Card.Text>
          <p>{props.courselist.content}</p>
        </Card.Text>
        <Button
          className="btn-white"
          variant="light"
          onClick={props.PushDetails}
        >
          {/* <a href="/courseDetails"> */}
          {props.courselist.btnName}

          {/* </a> */}
        </Button>
      </Card.Body>
    </Card>
  );
}

CourselistCard.defaultProps = {
  courselist: {
    btnName: " Learn More",
    content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
    title: "DCET",
  },
};

export function TextBookCard() {
  return (
    <Card className="text-book-card">
      <Card.Body>
        <div>
          <Row>
            <Col md="4">
              <div className="text-book-img" />
            </Col>
            <Col md="8">
              <p className="text-book-heading">
                Text book Name DCET- mechanical
              </p>
              <p className="text-book-author">Authour Name</p>
              <Button className="text-book-btn" variant="secondary">
                Subject1
              </Button>
            </Col>
          </Row>
        </div>

        <div>
          <p className="book-link">
            Link:
            <Link path="https://dcet.books/downloadLorem">
              https://dcet.books/downloadLorem
            </Link>
            {" "}
          </p>
        </div>
      </Card.Body>
    </Card>
  );
}
export function ReferenceBookCard() {
  return (
    <Card className="text-book-card">
      <Card.Body>
        <div>
          <Row>
            <Col md="4">
              <div className="text-book-img" />
            </Col>
            <Col md="8">
              <p className="text-book-heading">
                Text book Name DCET- mechanical
              </p>
              <p className="text-book-author">Authour Name</p>
              <Button className="text-book-btn" variant="secondary">
                Subject1
              </Button>
            </Col>
          </Row>
        </div>

        <div>
          <p className="book-link">
            Link:
            <Link path="https://dcet.books/downloadLorem">
              https://dcet.books/downloadLorem
            </Link>
            {" "}
          </p>
        </div>
      </Card.Body>
    </Card>
  );
}

// export function OtherCoursesCard() {
//   return (
//     <Card className="other-course-Card">
//       <Card.Body>
//         <Card.Title className="">
//           <p className="table-content">
//                           UGC NET Management Courses
//           </p>
//         </Card.Title>
//         <Card.Subtitle>
//           <p className="table-content">UGC Management Exam</p>
//         </Card.Subtitle>
//         <Row className="table-content">
//           <Button variant="link">
//             {" "}
//             <p className="table-content">12 Sub Courses</p>
//           </Button>
//           <Button variant="link">
//             <p className="table-content">View Courses</p>
//           </Button>
//         </Row>
//       </Card.Body>
//     </Card>
//   );
// }

export class OtherCoursesCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      otherCourse: [
        {
          courseName: " UGC NET Management Courses",
          examName: "UGC Management Exam",
          subCourse: "12 Sub Courses",
          viewCourse: "View Courses",
        },
        {
          courseName: " UGC NET Management Courses",
          examName: "UGC Management Exam",
          subCourse: "12 Sub Courses",
          viewCourse: "View Courses",
        },
        {
          courseName: " UGC NET Management Courses",
          examName: "UGC Management Exam",
          subCourse: "12 Sub Courses",
          viewCourse: "View Courses",
        },
        {
          courseName: " UGC NET Management Courses",
          examName: "UGC Management Exam",
          subCourse: "12 Sub Courses",
          viewCourse: "View Courses",
        },
        {
          courseName: " UGC NET Management Courses",
          examName: "UGC Management Exam",
          subCourse: "12 Sub Courses",
          viewCourse: "View Courses",
        },
      ],
    };
  }

  render() {
    return (
      <>
        {this.state.otherCourse.map((i) => (
          <Card className="other-course-Card">
            <Card.Body>
              <Card.Title className="">
                <p className="table-content">{i.courseName}</p>
              </Card.Title>
              <Card.Subtitle>
                <p className="table-content">{i.examName}</p>
              </Card.Subtitle>
              <Row className="table-content">
                <Button variant="link">
                  {" "}
                  <p className="table-content">{i.subCourse}</p>
                </Button>
                <Button variant="link">
                  <p className="table-content">{i.viewCourse}</p>
                </Button>
              </Row>
            </Card.Body>
          </Card>
        ))}
      </>
    );
  }
}
