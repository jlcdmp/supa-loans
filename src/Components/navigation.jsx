import React from 'react';
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap'
import '../CSS/Nav.css'



const Navigation = () => {
  return (



    <Navbar collapseOnSelect expand="md" >

      <Navbar.Brand href="#home">Supa Loans</Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">

        <Nav className="navigation">

          <Nav.Link href="#features">Home</Nav.Link>
          <Nav.Link href="#pricing">How It Works</Nav.Link>
          <Nav.Link href="#pricing">Questions</Nav.Link>
          <Nav.Link href="#pricing">Fee's</Nav.Link>



        </Nav>

      </Navbar.Collapse>
    </Navbar>














  );
}

export default Navigation;