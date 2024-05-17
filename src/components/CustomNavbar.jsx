import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const CustomNavbar = ({ cities = [] }) => {
  return (
    <Navbar bg="dark" expand="lg" data-bs-theme="dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Explore Cities</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            {cities.map(city => (
              <LinkContainer key={city.id} to={`/city/${city.id}`}>
                <Nav.Link>{city.name}</Nav.Link>
              </LinkContainer>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
