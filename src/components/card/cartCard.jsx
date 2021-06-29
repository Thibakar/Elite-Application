import React from "react";
import { Row, Col, Button } from "react-bootstrap";

import "../../scenes/cart/cart.scss";
import elitereg1 from "../../assets/images/carouselimg.png";

export default function Cartcard(props) {
  return (
    <div className="row cartCard">
      <Col md="12" sm="12" xs="12">
        <hr className="cardColor" />
      </Col>
      <Col md="4" xs="6">
        <Row>
          <Col md="4" xs="4">
            <img className="imageWidth" src={elitereg1} alt="" />
          </Col>

          <Col md="8" xs="8">
            <h3> {props.data.heading} </h3>
            <p className="product-size">Product Type -</p>
            <h5 className="p-b-5 margin-0 sd-size">
              {props.data.productType}{" "}
            </h5>
            <p className="add-size">{props.data.date}</p>
          </Col>
        </Row>
      </Col>
      <Col md="5" xs="2" />
      <Col md="3" xs="4" className="price-section">
        &#x20B9; {props.data.price}
        <br />
        <Button className="card-btn m-t-20 m-b-15" variant="secondary">
          Buy Now
        </Button>
        <br />
        <Button
          variant="light"
          className="btn-BG"
          onClick={() => props.onRemove(props.data.id)}
          size="sm"
        >
          Remove
        </Button>
      </Col>
    </div>
  );
}
