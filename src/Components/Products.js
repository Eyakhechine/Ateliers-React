import Product from "./Product";
import React, { Component } from "react";
import products from "../products.json";
import { Alert, Col, Container, Row, Stack } from "react-bootstrap";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }

  alertstate = (alert) => {
    this.setState({ alert });
    setTimeout(() => {
      this.setState({ alert: false });
    }, 2000);
  };
  render() {
    return (
      <Container>
        {" "}
        <Alert variant="success">
          <Alert.Heading>Hey, Welcome to Our shop MYSTORE</Alert.Heading>
          <p>
            thank you for choossing out store ,we hope you enjoy your shopping
            experience
          </p>
        </Alert>
        <>
          <Row>
            {" "}
            {products.map((product, index) => (
              <Col>
                {" "}
                <Product produit={product} key={index}></Product>{" "}
              </Col>
            ))}
          </Row>
        </>
      </Container>
    );
  }
}