/* eslint-disable react/prop-types */
import React from 'react';
import Header from './Header';
import SideNav from './SideNav';
import './styles/index.css';

function Navigation({ children, alwaysShow = false }) {
  return (
    <>
      <SideNav />
      <Header alwaysShow={alwaysShow} />
      <div id="main">
        {children}
      </div>
    </>
  );
}

export default Navigation;
