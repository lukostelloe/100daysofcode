import React from "react";
import "./Cv.css";
import html from "./Cvimages/html5logo.jpg";
import css from "./Cvimages/css3logo.jpg";
import js from "./Cvimages/javascriptlogo.jpg";
import ts from "./Cvimages/typescriptlogo.png";
import react from "./Cvimages/reactlogo.png";
import php from "./Cvimages/phplogo.png";
import wordpress from "./Cvimages/wordpresslogo.png";
import mongodblogo from "./Cvimages/mongodblogo.png";
import mysql from "./Cvimages/mysqllogo.png";

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
              <h3>Jan-May 21</h3>
              <p>Self taught developer</p>
              <p>HTML, CSS, JS</p>
            </div>
            <div className="exp_2">
              <h3>May-December 21</h3>
              <p>Web/ Mobile Dev Course.</p>
            </div>
            <div className="exp_3">
              <h3>September-Present 21</h3>
              <p>Monist Studio</p>
              <p>Junior Front End Web Developer</p>
            </div>
          </div>
          <h2>Technologies</h2>
          <div>
            <img src={html} alt="html" />
            <img src={css} alt="html" />
            <img src={js} alt="html" />
            <img src={ts} alt="html" />
            <img src={react} alt="html" />
            <img src={php} alt="html" />
            <img src={wordpress} alt="html" />
            <img src={mongodblogo} alt="html" />
            <img src={mysql} alt="html" />
          </div>
        </div>
        <div>
          <h2>Testimonials</h2>
          <h3>Anthony O'Neill, Monist Studio</h3>
          <p>etc etc etc</p>
          <h3>Johnathan Amselem, Simplon</h3>
          <p>etc etc etc</p>
        </div>
      </div>
    </div>
  );
}

export default Cv;
