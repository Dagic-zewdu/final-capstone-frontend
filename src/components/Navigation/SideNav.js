/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import GoogleSignIn from '../Signin';
import SocialLinks from '../social-links';

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
          <NavLink to="/motorcycles">Motorcycle</NavLink>
          <NavLink to="/reservations">My reservations</NavLink>
          <NavLink to="/addmotorcycle">Add Motorcycle</NavLink>
          <NavLink to="/requested">Requested reservations</NavLink>
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
