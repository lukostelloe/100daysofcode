import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <div>
        <ul>
          <Link to={"/"}>
            <li>Luke Costelloe</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/example">
            <li>Example</li>
          </Link>
          <Link to="/shop">
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
