import React from "react";
import { Card } from "react-bootstrap";

const Volunteer = ({ volunteer }) => {
  const { name, picture } = volunteer;
  return (
    <div className="g-5 col-sm-12 col-md-6 col-lg-3 mb-3">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Volunteer;
