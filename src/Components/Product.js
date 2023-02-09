

import React,{Component} from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import products from "../products.json";




export default class Product extends Component{

constructor(props) {
  super(props)
    this.state = { ...props };


}
render (){


return (
  <Card style={{ width: "20em" }}>
    <Card.Img
      variant="top"
      src={require("../assets/images/" + this.state.produit.img)}
    />
    <Card.Body>
      <Card.Title> {this.state.produit.name}</Card.Title>
      <Card.Title> {this.state.produit.price}</Card.Title>
      <Card.Text>{this.state.produit.description}</Card.Text>
      <Card.Text>{this.state.produit.quantity}</Card.Text>
      <Card.Text>{this.state.produit.like}</Card.Text>
      <Button variant="primary">Like</Button>
    </Card.Body>
  </Card>
);



}

}
