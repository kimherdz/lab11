import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CustomNavbar = ({ cities = [] }) => {
  return (
    <Navbar bg="dark" expand="lg" data-bs-theme="dark">
      <Container>
          <Navbar.Brand as={Link} to="/">Explore Cities</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            {cities.map(city => (
              <Nav.Link key={city.id} as={Link} to={`/city/${city.id}`}>{city.name}</Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
