import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <div>
        <ul>
          <li>
            <a href="https://www.google.ie/">Luke Costelloe</a>
          </li>
          <li>
            <a href="https://www.100daysofcode.com/">100 days of code</a>
          </li>
          <li>
            <a href="https://twitter.com/home">Twitter</a>
          </li>
          <Link to={"./Dashboard"}>
            <li>Dashboard</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
