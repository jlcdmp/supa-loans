import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'


const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Supa Loans</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Home</Nav.Link>
          <Nav.Link href="#pricing">How it works</Nav.Link>
          <Nav.Link href="#pricing">Questions</Nav.Link>
          <Nav.Link href="#pricing">Fees</Nav.Link>
          <Nav.Link href="#pricing">Contact</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
      </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  );
}

export default Navigation;