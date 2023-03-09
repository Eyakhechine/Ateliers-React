import React, { useState, useEffect } from "react";
import products from "../db.json";
import Product from "./Product";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import {getallProducts,} from "../service/api";
export default function ProductDetails(props) {
  const { id } = useParams();

  const [productfound, setProductfound] = useState(props.productfound);


  useEffect(() => {
    loadProductData();
  }, []);

  const loadProductData = async () => {
    const response = await getallProducts(id);
    setProductfound(response.data);
  };
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
