import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import moment from "moment";

import "./cart.scss";
import Cartcard from "../../components/card/cartCard";

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        {
          id: 1,
          heading: "IIT-JAM,(Maths)",
          productType: "SD Card+Live class",
          date: moment().format("DD MM YYYY"),
          price: 20000,
        },
        {
          id: 2,
          heading: "IIT-JAM,(Maths)",
          productType: "SD Card+Live class",
          date: moment().format("DD MM YYYY"),
          price: 30000,
        },
      ],
    };
  }

  onRemove = (i) => {
    const updatedOptions = this.state.options.filter((j) => j.id !== i);
    this.setState({ options: updatedOptions });
  };

  render() {
    return (
      <>
        <Container>
          <h6 className="cartSize"> Cart Buy Now</h6>
          <h1 className="productSize">Product in Your Bag</h1>
          <Row>
            <Col md="3" xs="3" className="productFont">
              Product
            </Col>
            <Col md="6" xs="5" />
            <Col md="3" xs="4" className="priceFont">
              price
            </Col>
          </Row>

          <div className="cartList">
            {this.state.options.map((i) => (
              <Cartcard onRemove={this.onRemove} data={i} />
            ))}
          </div>
          <br />
          <br />
        </Container>
      </>
    );
  }
}
