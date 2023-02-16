import Product from "./Product";
import React, { Component } from "react";
import products from "../products.json";
import { Alert, Col, Container, Row,} from "react-bootstrap";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props, alertbienvenue: true };
      
    setTimeout(() => {
      this.setState({ alertbienvenue: false });
    }, 3000);
  }
  


  render() {
    return (
      <Container>
        {" "}
          {this.state.alertbienvenue &&(
        <Alert variant="success">
          <Alert.Heading>Hey, Welcome to Our shop MYSTORE</Alert.Heading>
          <p>
            thank you for choossing out store ,we hope you enjoy your shopping
            experience
          </p>
        </Alert>)}
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