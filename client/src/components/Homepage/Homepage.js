import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";

function Homepage() {
  return (
    <div>
      <div className="squares">
        <div className="top_half">
          <div className="top_half_left_side">
            <Link to="/cv" className="text1">
              <li>Luke Costelloe</li>
            </Link>
          </div>
          <div className="top_half_right_side">
            <a href="/" className="text2">
              Design
            </a>
          </div>
        </div>
        <div className="bottom_half">
          <div className="bottom_half_left_side">
            <a href="/" className="text2">
              Projects
            </a>
          </div>
          <div className="bottom_half_right_side">
            <a href="/" className="text1">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
