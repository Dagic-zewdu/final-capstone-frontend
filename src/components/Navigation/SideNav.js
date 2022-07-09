/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import {
  faFacebook, faInstagram, faPinterest, faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function SideNav() {
  return (
    <nav id="mySidebar" className="sidebar">
      <div className="d-flex flex-column justify-content-between" style={{ height: '50%' }}>
        <div className="">
          <Link to="/">
            <h1 className="font-italic logo display-4">Bcycom</h1>
          </Link>
        </div>
        <div className="">
          <NavLink to="/motorcycle">Motorcycle</NavLink>
          <NavLink to="/reservations">My reservations</NavLink>
          <NavLink to="/addmotorcyle">Add Motorcycle</NavLink>
          <NavLink to="/requested">Requested reservations</NavLink>
        </div>
      </div>
      <div className="d-flex justify-content-around">
        <FontAwesomeIcon icon={faFacebook} className="fa-2x mr-3" />
        <FontAwesomeIcon icon={faTwitter} className="fa-2x mr-3" />
        <FontAwesomeIcon icon={faInstagram} className="fa-2x mr-3" />
        <FontAwesomeIcon icon={faPinterest} className="fa-2x mr-3" />
      </div>
    </nav>

  );
}

export default SideNav;
