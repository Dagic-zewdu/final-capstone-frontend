/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

function SideNav() {
  return (
    <nav id="mySidebar" className="sidebar">
      <Link to="/" className="logo">
        <h1 className="font-italic display-3">Logo</h1>
      </Link>
      <Link to="/motorcycle">Motorcycle</Link>
      <Link to="/rervations">Services</Link>
      <a href="#">Clients</a>
      <a href="#">Contact</a>
    </nav>
  );
}

export default SideNav;
