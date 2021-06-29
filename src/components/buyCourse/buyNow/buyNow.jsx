import React from "react";
import {
  Tab, Tabs, Container, Row,
} from "react-bootstrap";
import ShippingInformation from "./shippingInformation";
import Payment from "./payment";
import Breadcrumb from "../../shared/Breadcrumb";

export default function Buynow() {
  const items = [
    {
      url: "dashboard",
      label: "Home",
    },
    {
      url: "",
      label: "Buy A Course",
    },
    {
      url: "",
      label: "IIT-JAM",
    },
    {
      url: "",
      label: "Maths",
    },
    {
      url: "",
      label: "Buy Now",
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
        <div className="p-t-30 p-b-30">
          <Tabs defaultActiveKey="payment" id="uncontrolled-tab-example">
            <Tab eventKey="shippingInformation" title="Shipping Information">
              <ShippingInformation />
            </Tab>
            <Tab eventKey="payment" title="Payment">
              <Payment />
            </Tab>
          </Tabs>
        </div>
      </Container>
    </div>
  );
}
