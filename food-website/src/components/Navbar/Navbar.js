import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">NutriNest</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/contact">Contact</Link></li> {/* Add Contact link */}
        <li><Link to="/Signup">Signup</Link></li>
        <li><Link to="/Login">Login</Link></li>
        <li><Link to="/about">AboutUs</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
