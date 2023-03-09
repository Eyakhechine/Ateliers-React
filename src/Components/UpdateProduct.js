import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
  addProduct,
  editProduct,
  deleteProduct,
  getallProducts,
} from "../service/api";

export default function UpdateProduct(props) {
  const { id } = useParams();

  const [Product, setProduct] = useState({
    name: "",
    price: "",
    img: "",
    like: "",
    quantity: "",
    description: "",
  });
  useEffect(() => {
    loadProductData();
  }, []);

  const loadProductData = async () => {
    const response = await getallProducts(id);
    setProduct(response.data);
  };
  const navigate = useNavigate();
  const handleChange = (e) => {
    setProduct({ ...Product, [e.target.name]: e.target.value });
    console.log(Product);
  };
  const handleChangeFile = (e) => {
    setProduct({ ...Product, img: e.target.files[0].name });
    console.log(Product);
  };
  const edit = (e) => {
    e.preventDefault();
    editProduct(id, Product).then(() => navigate("/products"));
  };

  return (
    <Container style={{ marginTop: "30px" }}>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            as="textarea"
            type="text"
         
            name="name"
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
          
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
        <Button variant="primary" type="submit" onClick={edit}>
          update Product
        </Button>
        <Button variant="gray" type="reset">
          Save
        </Button>
      </Form>
    </Container>
  );
}
