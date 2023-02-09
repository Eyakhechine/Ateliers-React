

import React,{Component} from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";



export default class Product extends Component{

render (){


return (
  <Card style={{ width: "18rem" }}>
    <Card.Img variant="top" src={require("../assets/images/placeholder.jpg")} />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
);



}

}
