import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/feed" className="link">
        philosogram
      </Link>
      <input type="text" placeholder="Search.." className="link" />
      <div className="link">
        <Link to="/login" className="link">
          Login
        </Link>
        <Link to="/feed" className="link">
          Feed
        </Link>
        <Link to="/random" className="link">
          Random
        </Link>
        <Link to="/philpage" className="link">
          Philpage
        </Link>
        <Link to="/read" className="link">
          Read
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
