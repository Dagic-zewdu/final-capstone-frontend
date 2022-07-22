/* eslint-disable react/prop-types */
import React from 'react';
import { Collapse, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import SocialLinks from '../social-links';

function CollapseHeader({ toggle }) {
  return (
    <Collapse in={toggle}>
      <div className="col-lg-12">
        <div id="collapse-Header">
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink to="/motorcycles">Motorcycle</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/myreservations">My reservations</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/addmotorcycle">Add Motorcycle</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/requested_reservations">Requested reservations</NavLink>
            </Nav.Link>
            <SocialLinks />
          </Nav>
        </div>
      </div>
    </Collapse>
  );
}

export default CollapseHeader;
