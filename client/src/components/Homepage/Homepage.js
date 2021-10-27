import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";

function Homepage() {
  return (
    <div>
      <div className="homepage_div">
        <h1 className="homepage_div_big_text">Hi, I'm Luke.</h1>
        <h1 className="homepage_div_big_text">Junior Full Stack Developer</h1>
      </div>
      <div className="projects">
        <Link to="/musicmood">
          <li>MusicMood</li>
        </Link>
        <Link to="/hundays">
          <li>100 Days Blog</li>
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
