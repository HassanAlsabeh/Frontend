import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/home" className="navbar-brand">Home</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
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