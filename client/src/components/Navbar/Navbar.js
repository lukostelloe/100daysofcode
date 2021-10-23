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
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
