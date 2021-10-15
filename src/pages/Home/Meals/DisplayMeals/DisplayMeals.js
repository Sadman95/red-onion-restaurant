import React from "react";
import { Card, Col } from "react-bootstrap";

const DisplayMeals = ({ item }) => {
  const { img_url, title, sub_title, price } = item;
  return (
    <Col>
      <Card className='text-center border-0'>
        <Card.Img style={{height: 220}} className='w-50 mx-auto' variant="top" src={img_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text className='text-secondary'>{sub_title}</Card.Text>
          <h4>${price}</h4>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default DisplayMeals;
