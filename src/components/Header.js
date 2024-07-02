import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'; // Import the custom CSS file

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect className="navbar-custom">
      <Navbar.Brand as={NavLink} to="/">
        Namma Kudla
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={NavLink} to="/" exact>
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/blog">
            Blog
          </Nav.Link>
          <Nav.Link as={NavLink} to="/destinations">
            Destinations
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about">
            About
          </Nav.Link>
          <Nav.Link as={NavLink} to="/contact">
            Contact
          </Nav.Link>
          <Nav.Link as={NavLink} to="/login">
            Login
          </Nav.Link>
          <Nav.Link as={NavLink} to="/signup">
            Signup
          </Nav.Link>

          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
