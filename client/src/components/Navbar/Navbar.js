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
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
