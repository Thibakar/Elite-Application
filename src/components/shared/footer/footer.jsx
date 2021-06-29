/**
 * Copyright © REFIXD TECHNOLOGIE PVT LTD. - All Rights Reserved
 * -------------",
 * This file is part of REFIXD.
 * -------------
 * Authors: Chandra shekhar <chandrashekhar@refixd.com>.
 */

import React from "react";
import { Link } from "react-router-dom";
import {
  Row, Container, Col, Button,
} from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faMobile,
  faLocationArrow,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faYoutube,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import "./footer.scss";

import footerlogo from "../../../assets/images/elitefooter.png";
import uparrow from "../../../assets/images/uparrow.svg";

export default function Footer() {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col md="4">
            <img className="logo-img" src={footerlogo} alt="" />
            <ul className="list-unstyled">
              <li className="contact-link">
                <Link path="#">support@elite.com</Link>
              </li>

              <li className="contact-link">
                <Link path="#">+91 140401526</Link>
              </li>

              <div className="list-unstyled ">
                <Link path="#">
                  <FontAwesomeIcon icon={faFacebook} />
                </Link>

                <Link className="fav-icon" href="#">
                  <FontAwesomeIcon icon={faYoutube} />
                </Link>

                <Link className="fav-icon" href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>

                <Link className="fav-icon" href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>

                <Link className="fav-icon" href="#">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </Link>

                <div className="img-text list-unstyled">
                  <li>
                    <Row>
                      <Col md="1">
                        <Link path="#">
                          <FontAwesomeIcon icon={faMapMarkerAlt} />
                        </Link>
                      </Col>
                      <Col md="11">
                        <p className="address">
                            Jayanagar branch
                          <br />
                            #63,Durga Arcade ,1st floor,41 cross,Jayanagar 8th
                            block bangalore 560072
                          <div>
                            {" "}
                            <li className="m-t-10">
                              <Link href="#">
                                <FontAwesomeIcon icon={faMobile} />
                              </Link>
                              <Link className="m-l-10" to=""> 8050453678 |</Link>
                              <Link className="m-l-10" to=""> 9667456789</Link>
                            </li>
                          </div>
                          <li className="m-t-10">
                            <Link href="#">
                              <FontAwesomeIcon icon={faPhone} />
                            </Link>
                            <Link className="m-l-10" to=""> 8050453678  | </Link>
                            <Link className="m-l-10" to=""> 9667456789</Link>
                          </li>
                          <li>
                            <Button
                              className="list-unstyled "
                              variant="light"
                            >
                                Direction
                              <FontAwesomeIcon className=" m-l-10 colorDarkGray" icon={faLocationArrow} />
                            </Button>
                          </li>
                        </p>
                      </Col>
                    </Row>
                  </li>
                </div>

                <div className="img-text ">
                  <li>
                    <Row>
                      <Col md="1">
                        <Link path="#">
                          <FontAwesomeIcon icon={faMapMarkerAlt} />
                        </Link>
                      </Col>
                      <Col md="11">
                        <p className="address">
                            Malleshwaram branch
                          <br />
                            #63,Durga Arcade ,1st floor,41 cross,Jayanagar 8th
                            block bangalore 560072
                          <li className="m-t-10">
                            <Link href="#">
                              <FontAwesomeIcon icon={faMobile} />
                            </Link>
                            <Link className="m-l-10" to=""> 8050453678 </Link>
                               |
                            <Link className="m-l-10" to=""> 9667456789</Link>
                          </li>
                          <li className="m-t-10">
                            <Link href="#">
                              <FontAwesomeIcon icon={faPhone} />
                            </Link>
                            <Link className="m-l-10" to=""> 8050453678 </Link>
                               |
                            <Link className="m-l-10" to=""> 9667456789</Link>
                          </li>
                          <li>
                            <Button className="list-unstyled" variant="light">
                                Direction
                              <FontAwesomeIcon className=" m-l-10 colorDarkGray" icon={faLocationArrow} />
                            </Button>
                          </li>
                        </p>
                      </Col>
                    </Row>
                  </li>
                </div>
              </div>
            </ul>
          </Col>
          <Col md="2">
            <h3>Courses</h3>
            <ul className="list-unstyled">
              <li className="list-unstyled">
                <Link path="">BDS Subects</Link>
              </li>
              <li className="list-unstyled">
                <Link path="">B.E subjects</Link>
              </li>
              <li className="list-unstyled">
                <Link path="">C.Link </Link>
              </li>
              <li className="list-unstyled">
                <Link path="">CEET</Link>
              </li>
              <li className="list-unstyled">
                <Link path="">CSIR</Link>
              </li>
              <li className="list-unstyled">
                <Link path="">CS</Link>
              </li>
              <li className="list-unstyled">
                <Link path="">DCET</Link>
              </li>
              <li className="list-unstyled">
                <Link path="">DIPLOMA</Link>
              </li>
              <li className="list-unstyled">
                <Link path="">IBPS Banking</Link>
              </li>
              <li className="list-unstyled">
                <Link path="">ICMA</Link>
              </li>
              <li className="list-unstyled">
                <Link path="">IIT</Link>
              </li>
              <li className="list-unstyled">
                <Link path="">IIT JAM</Link>
              </li>
              <li className="list-unstyled">
                <Link path="">MBBS subjects</Link>
              </li>
              <li className="list-unstyled">
                <Link path="">NATA</Link>
              </li>
              <li className="list-unstyled">
                <Link path="">NAVODAYA</Link>
              </li>
              <li className="list-unstyled">
                <Link path="">NEET</Link>
              </li>
              <li className="list-unstyled">
                <Link path="">PGNET</Link>
              </li>
              <li className="list-unstyled">
                <Link path="">UGG NET</Link>
              </li>
            </ul>
          </Col>

          <Col md="2">
            <h3>Exam</h3>
            <ul className="list-unstyled">
              <li className="list-unstyled">
                <Link path="">ICAI Exam</Link>
              </li>
              <li className="list-unstyled">
                <Link path="">CEET Exam</Link>
              </li>
              <li className="list-unstyled">
                <Link path="">CSIR Exam</Link>
              </li>
              <li className="list-unstyled">
                <Link path="">ICSI Exam</Link>
              </li>
              <li className="list-unstyled">
                <Link path="">IBPS Banking</Link>
              </li>
              <li className="list-unstyled">
                <Link path="">ICMA</Link>
              </li>
              <li className="list-unstyled">
                <Link path="">IIT Exam</Link>
              </li>
              <li className="list-unstyled">
                <Link path="">IIT JAM Exam</Link>
              </li>
              <li className="list-unstyled">
                <Link path="">NATA Exam</Link>
              </li>
              <li className="list-unstyled">
                <Link path="">NAVODAYA Exam</Link>
              </li>
              <li className="list-unstyled">
                <Link path="">NEET</Link>
              </li>
              <li className="list-unstyled">
                <Link path="">PGNET</Link>
              </li>
              <li className="list-unstyled">
                <Link path="">UGG NET</Link>
              </li>
            </ul>
          </Col>
          <Col md="2">
            <h3>Others</h3>
            <ul className="list-unstyled">
              <li className="list-unstyled">
                <Link path="">Free Counssling</Link>
              </li>
              <li className="list-unstyled">
                <Link path="">Reference materials</Link>
              </li>
              <li className="list-unstyled">
                <Link path="">Sample videos</Link>
              </li>
              <li className="list-unstyled">
                <Link path="">Tests</Link>
              </li>
              <li className="list-unstyled">
                <Link path="">Practie</Link>
              </li>
            </ul>
          </Col>
          <Col md="2">
            <h3>company</h3>
            <ul className="list-unstyled">
              <li className="list-unstyled">
                <Link path="">Careers</Link>
              </li>
              <li className="list-unstyled">
                <Link path="">Support</Link>
              </li>
              <li className="list-unstyled">
                <Link path="">Flag</Link>
              </li>
            </ul>
          </Col>
        </Row>
        <hr />

        <Row>
          <Col md="9">
            <h3 className="list-align">About us</h3>
            <p className="list-align1">
              {" "}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
            </p>
            <h3 className="list-align">Who are we?</h3>
            <p className="list-align1">
              {" "}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
            </p>
            <h3 className="list-align">why us?</h3>
            <p className="list-align1">
              {" "}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
            </p>
            <h3 className="list-align">Feature 1</h3>
            <p className="list-align1">
              {" "}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
            </p>
            <h3 className="list-align">Feature 2</h3>
            <p className="list-align1">
              {" "}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
            </p>
            <h3 className="list-align">Feature 3</h3>
            <p className="list-align1">
              {" "}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
            </p>
            <h3 className="list-align">Our Team</h3>
            <p className="list-align1">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut
            </p>

            <div className="list-unstyled ">
              <Link path="#">Team Member1 </Link>

              <Link className="fav-icon" href="#">
                  Team Member1
              </Link>

              <Link className="fav-icon" href="#">
                  Team Member1
              </Link>

              <Link className="fav-icon" href="#">
                  Team Member1
              </Link>

              <Link className="fav-icon" href="#">
                  Team Member1
              </Link>
            </div>
          </Col>
          <Col className="up-ar">
            <img className="up-arrow" src={uparrow} alt="" />
          </Col>
        </Row>
        <hr />
        <div className="list-unstyled ">
          <Link className="list-align1" href="#">
              Disclaimer  |
          </Link>
          <Link className="list-align1 link" href="#">
              Privacy Policy  |
          </Link>
          <Link className="list-align1 link" href="#">
              Terms Of Services
          </Link>
          <p className="footer-mail">
              © 2019, ELITE LEARNING. All rights reserved.
          </p>
        </div>
      </Container>
    </div>
  );
}
