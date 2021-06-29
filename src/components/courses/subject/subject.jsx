/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";
import { Row, Col, Card } from "react-bootstrap";

import Chapter from "./chapter";
import DoughnutChart from "../../charts/Doughtnut";
import { TextBookCard, ReferenceBookCard } from "../../card/cards";

import "./main.scss";

// eslint-disable-next-line react/prefer-stateless-function
export default class Subject1 extends Component {
  render() {
    return (
      <>
        <div className="bg-clr">
          <div>
            <Row>
              <Col>
                <p className="chapter-heading">
                  <Row>
                    <Col md="1">
                      {" "}
                      <div className="box m-l-20" />
                    </Col>
                    <Col>Chapter 1 : Subject 1 Introduction</Col>
                    {" "}
                  </Row>
                </p>
              </Col>
              <Col>
                <p className="chapter-heading pull-right">
                  Marks : 6 /120 ( 5% weightage )
                </p>
              </Col>
            </Row>

            <Chapter />
          </div>

          <div>
            <Row>
              <Col>
                <p className="chapter-heading">
                  <Row>
                    <Col md="1">
                      {" "}
                      <div className="box m-l-20" />
                    </Col>
                    <Col>Chapter 1 : Subject 1 Introduction</Col>
                    {" "}
                  </Row>
                </p>
              </Col>
              <Col>
                <p className="chapter-heading pull-right">
                  Marks : 6 /120 ( 5% weightage )
                </p>
              </Col>
            </Row>

            <Chapter />
          </div>

          <div>
            <Row>
              <Col>
                <p className="chapter-heading">
                  <Row>
                    <Col md="1">
                      {" "}
                      <div className="box m-l-20" />
                    </Col>
                    <Col>Chapter 1 : Subject 1 Introduction</Col>
                    {" "}
                  </Row>
                </p>
              </Col>
              <Col>
                <p className="chapter-heading pull-right">
                  Marks : 6 /120 ( 5% weightage )
                </p>
              </Col>
            </Row>

            <Chapter />
          </div>

          <div>
            <Row>
              <Col>
                <p className="chapter-heading">
                  <Row>
                    <Col md="1">
                      {" "}
                      <div className="box m-l-20" />
                    </Col>
                    <Col>Chapter 1 : Subject 1 Introduction</Col>
                    {" "}
                  </Row>
                </p>
              </Col>
              <Col>
                <p className="chapter-heading pull-right">
                  Marks : 6 /120 ( 5% weightage )
                </p>
              </Col>
            </Row>

            <Chapter />
          </div>

          <div>
            <Row>
              <Col>
                <p className="chapter-heading">
                  <Row>
                    <Col md="1">
                      {" "}
                      <div className="box m-l-20" />
                    </Col>
                    <Col>Chapter 1 : Subject 1 Introduction</Col>
                    {" "}
                  </Row>
                </p>
              </Col>
              <Col>
                <p className="chapter-heading pull-right">
                  Marks : 6 /120 ( 5% weightage )
                </p>
              </Col>
            </Row>

            <Chapter />
          </div>
          <div>
            <p className="chapter-heading">Subject 1 : Chapter Wise Analysis</p>
            <Row>
              <Col md="6">
                <DoughnutChart />
              </Col>
              <Col md="6">
                <p className="chapter-heading">Total Marks : 120</p>

                <p>chapter 1: 50marks-45%</p>
                <p>chapter 5: 42marks-35%</p>
                <p>chapter 4: 38marks-32%</p>
                <p>chapter 3: 28marks-28%</p>
                <p>chapter 2: 12marks-12%</p>
              </Col>
            </Row>
          </div>
        </div>
        <div className="chapter-heading">
          <Card>
            <p className="chapter-heading">
              Dcet - Mechanical Course : Subject Analysis
            </p>
            <Row>
              <Col md="6">
                <DoughnutChart />
              </Col>
              <Col md="6">
                <p className="chapter-heading">Total Marks : 120</p>

                <p>subject 1 : 150 marks / 25 Questions - 45%</p>
                <p>subject 2 : 42 marks / 25 Questions - 35%</p>
                <p>subject 3 : 42 marks / 25 Questions - 35%</p>
                <p>subject 4 : 28 marks / 25 Questions - 28%</p>
                <p>subject 5 : 12 marks / 25 Questions - 12%</p>
              </Col>
            </Row>
          </Card>
        </div>
        <div>
          <p className="heading">Recommended Books</p>
          <p className="sub-head">Text Books</p>
          <div>
            <Row>
              <Col md="6">
                {" "}
                <TextBookCard />
              </Col>
              <Col md="6">
                {" "}
                <TextBookCard />
              </Col>
              <Col md="6">
                {" "}
                <TextBookCard />
              </Col>
              <Col md="6">
                {" "}
                <TextBookCard />
              </Col>
            </Row>
          </div>
        </div>

        <div>
          <p className="sub-head">Reference Books</p>
          <div>
            <Row>
              <Col md="6">
                {" "}
                <ReferenceBookCard />
              </Col>
              <Col md="6">
                {" "}
                <ReferenceBookCard />
              </Col>
              <Col md="6">
                {" "}
                <ReferenceBookCard />
              </Col>
              <Col md="6">
                {" "}
                <ReferenceBookCard />
              </Col>
            </Row>
          </div>
        </div>
      </>
    );
  }
}
