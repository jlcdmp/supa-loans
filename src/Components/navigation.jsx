import React from 'react';
import '../CSS/Nav.css'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from '@reach/router'



const Navigation = () => {
  return (

    <Navbar collapseOnSelect expand="md" >



      <div className='secured'>

        <img src={require('../images/lock.png')} /> <p>SUPA-LOANZ Is A Protected US Site</p>
      </div>


      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">



        <Nav className="navigation">

          <Link className='nav-link' to='/' >Home</Link>
          <Link className='nav-link' to=''>How It Works</Link>
          <Link className='nav-link' to=''>Questions</Link>
          <Link className='nav-link' to=''>Fees</Link>
        </Nav>


      </Navbar.Collapse>
    </Navbar>











  );

}



export default Navigation;