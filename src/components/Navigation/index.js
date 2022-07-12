/* eslint-disable react/prop-types */
import React from 'react';
import Header from './Header';
import SideNav from './SideNav';
import './styles/index.css';

function Navigation({ children }) {
  return (
    <>
      <SideNav />
      <Header />
      <div id="main">
        {children}
      </div>
    </>
  );
}

export default Navigation;
