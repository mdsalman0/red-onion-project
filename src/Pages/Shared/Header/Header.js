import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom'
import food from '../../../Image/images/logo.png'
import { Navbar,Container,Nav,NavDropdown} from 'react-bootstrap';
const Header = () => {
    return (
        <div className='nav-container'>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="primary">
      <Container>
        <Navbar.Brand as={Link} to="/"><img height={50} src={food} alt="" /></Navbar.Brand>
        <Navbar.Toggle className='bg-light' aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='text-white' as={Link} to="/home">Home</Nav.Link>
            <Nav.Link className='text-white' as={Link} to="/reviews">Reviews</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className='text-white' as={Link} to="/login">Login</Nav.Link>
            <Nav.Link className='text-white' eventKey={2} as={Link} to="/singUp">
              SingUp
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;