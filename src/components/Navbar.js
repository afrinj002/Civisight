import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={logo} alt="Civisight Logo" />
        <h2>Civisight</h2>
      </Link>
      <ul className="navbar-links">
        <li><Link to="/home">Home Feed</Link></li>
        <li><Link to="/verify">Verification Dashboard</Link></li>
        <li><Link to="/civic">Civic Dashboard</Link></li>
        <li><Link to="/settings">Settings</Link></li>
        <li><Link to="/">Log Out</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;