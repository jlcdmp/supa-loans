import React from 'react';
import '../CSS/Nav.css'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from '@reach/router'



const Navigation = () => {
  return (

    <Navbar collapseOnSelect expand="md" >


      <a class="navbar-brand" href="#">
        <img src={require('/Users/josephcarroll/joes-work/supa-loans/supa-loans/src/images/logo6.png')} alt="" />
      </a>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">

        <Nav className="navigation">

          <Link className='nav-link' to='/' >Home</Link>
          <Link className='nav-link' to='/how' >How It Works</Link>
          <Link className='nav-link' to='/Faq'>Questions</Link>
          <Link className='nav-link' to='/Fees'>Fees</Link>




        </Nav>

      </Navbar.Collapse>
    </Navbar>











  );
}

export default Navigation;