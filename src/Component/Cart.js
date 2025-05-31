import React from "react";
import { Row, Col, Card } from "react-bootstrap";

export function Cart({ cartItems }) {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <Row style={{ margin: "20px", marginLeft: "70px" }}>
          {cartItems.map((data, index) => (
            <Col lg={6} md={6} sm={12} key={index}>
              <Card style={{ width: "80%", marginBottom: "10px" }}>
                <Card.Img variant="top" src={data.image} />
                <Card.Body>
                  <Card.Title>{data.title}</Card.Title>
                  <Card.Text>{data.description}</Card.Text>
                  <Card.Text style={{ fontWeight: "bold", color: "green" }}>
                    Price: ${data.price}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}
