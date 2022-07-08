/* eslint-disable react/prop-types */
import React from 'react';
import 'styles/index.css';
import { Link } from 'react-router-dom';

function SideNav({ children }) {
  return (
    <>
      <div id="mySidebar" className="sidebar">
        <Link to="/" className="logo">
          <h1 className="font-italic display-2">Logo</h1>
        </Link>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>
      <div id="main">
        {children}
      </div>
    </>
  );
}

export default SideNav;
