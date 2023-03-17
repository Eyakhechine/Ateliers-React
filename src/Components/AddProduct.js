import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { addProduct } from '../service/api';
export default function AddProduct() {

const [Product,setProduct]=useState({

      "name": "",
      "price": "",
      "img": "",
      "like": 0,
      "quantity": 0,
      "description": "",

    })
    const add = (e) => {
        e.preventDefault();
addProduct(Product).then(() => navigate("/products") );

    }
const navigate=useNavigate();
const handleChange=(e) => {

setProduct({...Product,[e.target.name]:e.target.value})
console.log(Product);

 }

     const handleChangeFile = (e) => {
   
setProduct({ ...Product,img:e.target.files[0].name });
       console.log(Product);
     };
  return (
    <Container style={{ marginTop: "30px" }}>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            as="textarea"
            type="text"
            placeholder="Enter the name"
            name="name"
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the product description"
            name="description"
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            type="number"
            name="quantity"
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="file"
            name="img"
            onChange={(e) => handleChangeFile(e)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={add}>
          Add Product
        </Button>
        <Button variant="gray" type="reset">
          Save
        </Button>
      </Form>
    </Container>
  );
}
