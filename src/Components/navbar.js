import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Card from "react-bootstrap/Card";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink} from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCountAll } from "../ReduxToolkit/slices/cartSlice";
import img from "../assets/images/cart.png";
export default function NavigationBar() {

const CartNumber = useSelector(selectCountAll);

 
   return (
     <>
       <br />
       <Navbar bg="primary" variant="dark">
         <Container>
           <Navbar.Brand href="Products">MyStore</Navbar.Brand>
           <Nav className="me-auto">
             <Nav.Link
               as={NavLink}
               to="/products"
               style={({ isActive }) => ({
                 textDecoration: isActive && "underline",
               })}
             >
               Products
             </Nav.Link>

             <Nav.Link
               as={NavLink}
               to="/products/add"
               style={({ isActive }) => ({
                 textDecoration: isActive && "underline",
               })}
             >
               AddProduct
             </Nav.Link>
             <Nav.Link as={NavLink} to="/cart">
                  <Card.Img sizes={10} src={img} />
               Panier {CartNumber}
             </Nav.Link>
           </Nav>
         </Container>
       </Navbar>
     </>
   );
}
