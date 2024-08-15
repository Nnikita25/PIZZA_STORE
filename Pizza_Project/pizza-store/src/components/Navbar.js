// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const logoStyle = {
    color: "#333", // Darker color for the logo for contrast with light background
    fontSize: "2.5rem", // Adjusted for better visibility
    fontFamily: "Sans-Serif",
    marginRight: "2rem", // Space between the logo and the nav links
  };

  const navLinksStyle = {
    marginLeft: "auto", // Pushes nav links to the right
  };

  const navLinkStyle = {
    marginRight: "1rem", // Space between individual nav links
  };

  return (
    <nav className="navbar navbar-expand-lg navbar- bg-warning">
      <div className="container">
        <Link className="navbar-brand" style={logoStyle} to="/">
          Pizza Store
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav" style={navLinksStyle}>
            <li className="nav-item">
              <Link className="nav-link" style={navLinkStyle} to="/">
                Landing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={navLinkStyle} to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={navLinkStyle} to="/items">
                All Items
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={navLinkStyle} to="/add-item">
                Add Item
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={navLinkStyle} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
