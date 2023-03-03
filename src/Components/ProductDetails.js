import React from 'react'
import products from "../products.json";
import Product from "./Product";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
export default function ProductDetails(props) {
    const {name} =useParams();
    const productfound=products.filter((product) =>product.name === name)[0];
  return (
    <>
      {productfound ? (
        <>
          <Card style={{ width: "20em" }} class="bestProduct">
            <Card.Img
              variant="top"
              src={require("../assets/images/" + productfound.img)}
            />
            <Card.Body>
              <Card.Text>{productfound.name}</Card.Text>
              <Card.Text> {productfound.price}</Card.Text>
              <Card.Text>{productfound.description}</Card.Text>
              <Card.Text>{productfound.quantity}</Card.Text>
              <Card.Text> likes :{productfound.like}</Card.Text>
              <Button variant="primary" href="/products">
                return to products
              </Button>
            </Card.Body>
          </Card>
        </>
      ) : (
        <h2>product not found</h2>
      )}
    </>
  );
}
