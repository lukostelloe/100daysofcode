import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <div>
        <ul>
          <Link to="/" className="nav_link">
            <li>Luke Costelloe</li>
          </Link>
          <Link to="/hundays" className="nav_link">
            <li>100daysblog</li>
          </Link>
          <Link to="/musicmood" className="nav_link">
            <li>Music Mood</li>
          </Link>
          <Link to="/contact" className="nav_link">
            <li>Contact</li>
          </Link>
          <Link to="/shop" className="nav_link">
            <li>Shop</li>
          </Link>
          <li>
            <a href="https://www.100daysofcode.com/">100 days of code</a>
          </li>
          <li>
            <a href="https://twitter.com/home">Twitter</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
