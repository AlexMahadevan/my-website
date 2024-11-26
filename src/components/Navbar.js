import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Assuming you use a separate CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/blog">Writing</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/training">Training</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
