import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/assets/logo.png" alt="Civisight Logo" />
        <h2>Civisight</h2>
      </div>
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