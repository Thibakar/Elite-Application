/* eslint-disable react/jsx-indent */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-undef */
/* eslint-disable no-sequences */
import React from "react";
import {
  Dropdown, Form, Navbar,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./studentHeader.scss";
import logo from "../../../assets/images/elitelogo.png";
import elitereg1 from "../../../assets/images/carouselimg.png";
import userIcon from "../../../assets/icons/user.png";

const CustomToggle = React.forwardRef((
  { children, onClick },
  ref,
) => (
  <a
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
  </a>
));


export default function Header() {
  return (
    <header className="studentHeader">
      <div className="logo-container">
        {/* <h1 className="brand-logo"> */}
        <Navbar.Brand>
          <Link to="/dashboard">
            <img className="elite-logo" src={logo} alt="" />
          </Link>
        </Navbar.Brand>
        <ul className="row">
          {/* <div className="left" /> */}
          <div className="studentSearchBox">
            <a href="#home">
              <Form.Group className="searchInput" controlId="formBasicSearch">
                <Form.Control
                  type="search"
                  placeholder="Search Courses, Exams, Topics, Syllabus"
                  className="input"
                >
                </Form.Control>
                <p className="StudentsearchBar"><i className="fa fa-search searchIcon" aria-hidden="true" /></p>

                {/* <Button className="btn1 no-margin" variant="success"> */}
                {/* <img src={search} alt="" /> */}
                {/* </Button> */}
              </Form.Group>
            </a>
          </div>


          {/* <span className="Dashboard">
              <i className="fa fa-search" aria-hidden="true" />
            </span> */}

          {/* <span>
              <i className="fa fa-bell-o" aria-hidden="true" />
            </span> */}
          <Dropdown drop="left">
            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">

              <span>
                <i className="fa fa-bell-o bellIcon" aria-hidden="true" />
              </span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <div className="studentDropdown">
                <div className="mainInstructions1 p-t-10">
                  <div>
                    <img src={elitereg1} />
                  </div>
                  <span className="InstRight1">
                    {" "}
                    <h2>Live Class Update</h2>
           <p className="contentFontsize">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>

                    <h6 className="minute">6 Min Ago</h6>
                  </span>
                </div>


                <div className="mainInstructions1 p-t-10">
                  <div>
                    <img src={elitereg1} />
                  </div>
                  <span className="InstRight1">
                    {" "}
                    <h2>New Topic Update</h2>
           <p className="contentFontsize">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>

                    <h6 className="minute">6 Min Ago</h6>
                  </span>
                </div>

                <div className="mainInstructions1 p-t-10">
                  <div>
                    <img src={elitereg1} />
                  </div>
                  <span className="InstRight1">
                    {" "}
                    <h2>Live Class Update</h2>
           <p className="contentFontsize">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>

                    <h6 className="minute">6 Min Ago</h6>
                  </span>
                </div>

               <span className="verticalhorizontalMiddle p-t-5 "> All Notifications</span>
              </div>

              {/* <Dropdown.Item eventKey="1">Red</Dropdown.Item>
              <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
              <Dropdown.Item eventKey="3" active>
        Orange
              </Dropdown.Item>
              <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item> */}
            </Dropdown.Menu>
          </Dropdown>

          <div className="profileSection">
            <div className="ManagementAlign">
              <h3>Rahul Sharma</h3>
              <p>
DCET,
                <span>Management</span>
              </p>
            </div>
            <div className="profileImage">
              <img src={userIcon} alt="cannot display" />
            </div>
          </div>
        </ul>
        {/* </h1> */}
      </div>
    </header>

  );
}
