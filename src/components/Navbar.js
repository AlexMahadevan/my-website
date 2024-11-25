import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li><Link to="/">About me</Link></li>
        <li><Link to="/blog">Writing</Link></li>
        <li><Link to="/about">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
