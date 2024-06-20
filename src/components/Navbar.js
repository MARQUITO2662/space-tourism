// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/shared/logo.svg';
/* import iconClose from '../images/shared/icon-close.svg'; */
/* import iconHamburger from '../images/shared/icon-hamburger.svg'; */
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
   {/*    <img src={iconHamburger} alt="Menu" className="menu-icon" /> */}
      <ul>
        <li>
          <Link to="/">00 Home</Link>
        </li>
        <li>
          <Link to="/destination">01 Destination</Link>
        </li>
        <li>
          <Link to="/crew">02 Crew</Link>
        </li>
        <li>
          <Link to="/technology">03 Technology</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
