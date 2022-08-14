import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">My First React App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Album</Nav.Link>
              <Nav.Link href="/posts">Posts</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Navigation