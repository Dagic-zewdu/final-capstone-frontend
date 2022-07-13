import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import SocialLinks from '../social-links';
import GoogleSignIn from '../Signin';

function Header() {
  return (
    <Navbar className="bg-white" expand="lg" id="header-nav">
      <Container>
        <div className="d-flex justify-content-between w-100 align-items-center">
          <div className="d-flex">
            <Navbar.Toggle style={{ marginRight: 10 }} aria-controls="basic-navbar-nav" />
            <GoogleSignIn />
          </div>
          <Link to="/">
            <h1 className="font-italic logo display-4">Bcycom</h1>
          </Link>
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink to="/motorcycles">Motorcycle</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/reservations">My reservations</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/addmotorcycle">Add Motorcycle</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/reservations">Requested reservations</NavLink>
            </Nav.Link>
            <SocialLinks />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
