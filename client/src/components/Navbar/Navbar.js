import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <div>
        <ul>
          <Link to="/contact" className="nav_link">
            <li>Contact</li>
          </Link>
          <Link to="/musicmood" className="nav_link">
            <li>MusicMood</li>
          </Link>
          <Link to="/hundays" className="nav_link">
            <li>100days</li>
          </Link>
          <Link to="/cv" className="nav_link">
            <li>CV</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
