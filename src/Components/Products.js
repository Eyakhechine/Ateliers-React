import Product from "./Product";
import React, { Component } from "react";

import { Alert, Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getallProducts }from "../service/api";

export default function Products(props) {
  const [product, setProduct] = useState(props.product);
  const [updated, setUpdated] = useState(0);
const [products,setProducts] = useState([]);
const [alertbienvenue] = useState(0);

 
 useEffect(() => {

getallProducts()
  .then((res) => setProducts(res.data))
  .catch((error) => console.log(error));}
 , [])


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
