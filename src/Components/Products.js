import Product from "./Product";
import React, { Component } from "react";
import products from "../products.json";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";

export default function Products(props) {
  const [product, setProduct] = useState(props.product);
  const [updated, setUpdated] = useState(0);

const [alertbienvenue] = useState(0);

 
  setTimeout(() => {
    props.setState({ alertbienvenue: false });
  }, 3000);


  return (
    <Container>
      {" "}
      
      {props.alertbienvenue && (
        <Alert variant="success">
          <Alert.Heading>Hey, Welcome to Our shop MYSTORE</Alert.Heading>
          <p>
            thank you for choossing out store ,we hope you enjoy your shopping
            experience
          </p>
        </Alert>
      )}
      <>
        <Row>
          {" "}
          {products.map((product, index) => (
            <Col>
              {" "}
              <Product product={product} key={index}></Product>{" "}
            </Col>
          ))}
        </Row>
      </>
    </Container>
  );
}
