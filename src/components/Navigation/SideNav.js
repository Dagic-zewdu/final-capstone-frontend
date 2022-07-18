/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import GoogleSignIn from '../Signin';
import SocialLinks from '../social-links';
import './styles/index.css';

function SideNav() {
  return (
    <nav id="mySidebar" className="sidebar">
      <div className="d-flex flex-column justify-content-between" style={{ height: '50%' }}>
        <div className="">
          <Link to="/">
            <h1 className="font-italic logo display-4 text-center">Bcycom</h1>
          </Link>
        </div>
        <div className="m-2 side-link">
          <NavLink to="/motorcycles" exact activeClassName="active" style={{ fontFamily: "'Rubik', sans-serif" }} class="fw-bolder">MOTORCYCLES</NavLink>
          <NavLink to="/reservations" activeClassName="active" style={{ fontFamily: "'Rubik', sans-serif" }} class="fw-bolder">MY RESERVATIONS</NavLink>
          <NavLink to="/addmotorcycle" activeClassName="active" style={{ fontFamily: "'Rubik', sans-serif" }} class="fw-bolder">ADD MOTORCYCLE</NavLink>
          <NavLink to="/requested" activeClassName="active" style={{ fontFamily: "'Rubik', sans-serif" }} class="fw-bolder">REQ. RESERVATIONS</NavLink>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <GoogleSignIn />
        <SocialLinks />
      </div>
    </nav>
  );
}

export default SideNav;
