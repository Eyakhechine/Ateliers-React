import Product from "./Product";
import React, { Component } from "react";
import products from "../products.json";

export default class Products extends Component {
  constructor(props) {
    super(props)
  this.state = { ...props };
   
  }
  render() {
    return (
      <>
        {products.map((product, index) => (
          <Product produit={product} key={index}></Product>
        ))}
      </>
    );
  }
}