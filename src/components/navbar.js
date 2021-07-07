import React, { Component } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
export default class Navbar extends Component {

  render() {
    return (
      <nav role='navigation'>
      <div id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <li>
          <Link to="/home" className="navbar-brand">Home</Link>
          </li>
        <li className="navbar-item">
          <Link to="/about" className="nav-link">About</Link>
          </li>
        
          <li className="navbar-item">
          <Link to="/experience" className="nav-link">Experience</Link>
          </li>
          <li className="navbar-item">
          <Link to="/projects" className="nav-link">Projects </Link>
          </li>
          <li className="navbar-item">
          <Link to="/contact" className="nav-link">contact </Link>
          </li>
        </ul>
      </div>
    </nav>
    );
  }
}