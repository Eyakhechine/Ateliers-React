import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import "./Product.css";
import { Link } from "react-router-dom";
import { deleteProduct } from "../service/api";
//redux
import { useDispatch } from "react-redux";
import { increment } from "../ReduxToolkit/slices/cartSlice";


export default function Product(props) {
  const [product, setProduct] = useState(props.product);
  const [updated, setUpdated] = useState(0);
const navigate = useNavigate();
const dispatch = useDispatch();
const addToCart = (p) => {
  dispatch(increment(p));
};
  const addlike = () => {
    setProduct({
      ...product,
      like: Number(product.like) + 1,
    });
    setUpdated((u) => u + 1);
  };
   const deletep = (e) => {
     e.preventDefault();
     deleteProduct(product.id).then(() => navigate("/products"));
   };
  useEffect(() => {
    console.log(updated);
  }, [updated]);

  return product.like >= 5 ? (
    <Card style={{ width: "20em" }} class="bestProduct">
      <Card.Img
        variant="top"
        src={require("../assets/images/" + props.product.img)}
      />
      <Card.Body>
        <Card.Text>
          <a href={props.product.id}>{props.product.name}</a>
        </Card.Text>
        <Card.Text> {props.product.price}</Card.Text>
        <Card.Text>{props.product.description}</Card.Text>
        <Card.Text>{props.product.quantity}</Card.Text>
        <Card.Text> likes :{product.like}</Card.Text>

        <Button variant="primary" onClick={addlike}>
          Like
        </Button>
      </Card.Body>
    </Card>
  ) : (
    <Card style={{ width: "20em" }}>
      <Card.Img
        variant="top"
        src={require("../assets/images/" + props.product.img)}
      />
      <Card.Body>
        <Card.Text>
          <a href={props.product.id}>{props.product.name}</a>
        </Card.Text>
        <Card.Text> {props.product.price}</Card.Text>
        <Card.Text>{props.product.description}</Card.Text>
        <Card.Text>{props.product.quantity}</Card.Text>
        <Card.Text>likes :{product.like}</Card.Text>
        <Button variant="primary" onClick={addlike}>
          Like
        </Button>
        <Button variant="danger" onClick={deletep}>
          delete
        </Button>
        <Link to={`/products/edit/${product.id}`}>
          <Button variant="success">Edit Product</Button>
        </Link>
        <Button variant="danger" onClick={() => addToCart(product)}>
          +add to cart
        </Button>
      </Card.Body>
    </Card>
  );
}
