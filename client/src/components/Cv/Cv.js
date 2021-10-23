import React from "react";
import "./Cv.css";
import mountain from "./Cvimages/mountain.jpg";

function Cv() {
  return (
    <div>
      <div className="head_text">
        <div>
          <img src={mountain} alt="mountain" className="mountain" />
        </div>
        <div class="text_on_image">
          <h1> Luke Costelloe </h1>
          <h2> Junior Web Developer </h2>
        </div>
      </div>
      <div className="about">
        <h2>Welcome to my page!</h2>
        <p>
          I'm a junior developer in school and working part time in web
          development.
        </p>
        <div>
          <h2>Experience</h2>
          <p>Jan-May 21: Self taught developt, HTML, CSS, JS</p>
          <p>May-December 21: Web/ Mobile Dev Course.</p>
          <p>
            September-Present 21P: Monist Studio. Junior Front End Web Developer
          </p>
          <h2>Technologies</h2>
          <p>HTML, CSS, JS, TS, React, PHP, Wordpress, MongoDB, MySQL</p>
        </div>
      </div>
    </div>
  );
}

export default Cv;
