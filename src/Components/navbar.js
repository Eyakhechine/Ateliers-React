import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
export default function NavigationBar() {



 
   return (
     <>
  
       <br />
       <Navbar bg="primary" variant="dark">
         <Container>
           <Navbar.Brand href="#home">MyStore</Navbar.Brand>
           <Nav className="me-auto">
      
             <Nav.Link  style={({ isActive }) => ({
    color: isActive ? '#fff' : '#545e6f'})} href="products">Products</Nav.Link>
           </Nav>
         </Container>
       </Navbar>
     </>
   );
}
