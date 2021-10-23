import React from "react";
import "./Cv.css";

function Cv() {
  return (
    <div className="cv_page">
      <div className="cv_page_header">
        <h1> Luke Costelloe </h1>
        <h2>Welcome to my page!</h2>
        <p>
          I'm a junior developer in school and working part time in web
          development.
        </p>
      </div>
      <div className="about">
        <div>
          <h2>Experience</h2>
          <div className="experience_tabs">
            <div className="exp_1">
              <p>Jan-May 21</p>
              <p>Self taught developer</p>
              <p>HTML, CSS, JS</p>
            </div>
            <div className="exp_2">
              <p>May-December 21</p>
              <p>Web/ Mobile Dev Course.</p>
            </div>
            <div className="exp_3">
              <p>September-Present 21</p>
              <p>Monist Studio</p>
              <p>Junior Front End Web Developer</p>
            </div>
          </div>
          <h2>Technologies</h2>
          <p>HTML, CSS, JS, TS, React, PHP, Wordpress, MongoDB, MySQL</p>
        </div>
      </div>
    </div>
  );
}

export default Cv;
