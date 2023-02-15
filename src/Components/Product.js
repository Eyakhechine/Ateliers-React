

import React,{Component} from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";





export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props};
  }

  like = (e) => {
    e.preventDefault();
    this.setState((oldState) => ({
      produit: { ...oldState.produit, like: oldState.produit.like + 1 },
    }));
  };

  buy = (e) => {
    e.preventDefault();
    this.setState((oldState) => ({
      produit: { ...oldState.produit, quantity: oldState.produit.quantity - 1 },
    }));
   // this.props.alertstate(true);
  };

  render() {
    return (
      <Card style={{ width: "20em" }}>
        <Card.Img
          variant="top"
          src={require("../assets/images/" + this.state.produit.img)}
        />
        <Card.Body>
          <Card.Text> {this.state.produit.name}</Card.Text>
          <Card.Text> {this.state.produit.price}</Card.Text>
          <Card.Text>{this.state.produit.description}</Card.Text>
          <Card.Text>{this.state.produit.quantity}</Card.Text>
          <Card.Text>{this.state.produit.like}</Card.Text>
          <Button variant="primary" onClick={this.like}>
            Like
          </Button>
         <Button
                  variant="info"
                disabled={!this.state.produit.quantity}
                  onClick={this.buy}
                >
                  Buy
                </Button>
        </Card.Body>
      </Card>
    );
  }
}
