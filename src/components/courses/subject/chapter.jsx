import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import "./chapter.scss";

export default function Chapter() {
  return (
    <Card className="concept-card">
      <ListGroup variant="flush">
        <ListGroup.Item>
          <p className="concept-text ">
            {" "}
              Concept name 1 : Lorem ipsum, dolor sit amet, consetetur,
              sadipscing elitr, sed diam nonumy
          </p>
          {" "}
        </ListGroup.Item>
        <ListGroup.Item>
          {" "}
          <p className="concept-text ">
            {" "}
              Concept name 2 : Lorem ipsum, dolor sit amet, consetetur,
              sadipscing elitr, sed diam nonumy
          </p>
          {" "}
        </ListGroup.Item>
        <ListGroup.Item>
          {" "}
          <p className="concept-text">
            {" "}
              Concept name 3: Lorem ipsum, dolor sit amet, consetetur,
              sadipscing elitr, sed diam nonumy
          </p>
          {" "}
        </ListGroup.Item>
        <ListGroup.Item>
          {" "}
          <p className="concept-text">
            {" "}
              Concept name 4: Lorem ipsum, dolor sit amet, consetetur,
              sadipscing elitr, sed diam nonumy
          </p>
          {" "}
        </ListGroup.Item>
        <ListGroup.Item>
          {" "}
          <p className="concept-text">
            {" "}
              Concept name 5: Lorem ipsum, dolor sit amet, consetetur,
              sadipscing elitr, sed diam nonumy
          </p>
          {" "}
        </ListGroup.Item>
        <ListGroup.Item>
          {" "}
          <p className="concept-text">
            {" "}
              Concept name 6 : Lorem ipsum, dolor sit amet, consetetur,
              sadipscing elitr, sed diam nonumy
          </p>
          {" "}
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}
