import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Home</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link> {/* Updated link */}
        </li>
        <li>
          <Link to="/training">Training</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
