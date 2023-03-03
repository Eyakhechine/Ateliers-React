import React from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { Container } from 'react-bootstrap';
export default function AddProduct() {
  return (
    <Container style={{ marginTop: "30px" }}>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            as="textarea"
            type="text"
            placeholder="Enter the name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the product description"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Quantity</Form.Label>
          <Form.Control type="number" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Product
        </Button>
        <Button variant="gray" type="reset">
          Save
        </Button>
      </Form>
    </Container>
  );
}
