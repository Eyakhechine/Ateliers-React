import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink} from "react-router-dom";
export default function NavigationBar() {



 
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
           </Nav>
         </Container>
       </Navbar>
     </>
   );
}
