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
    </div>
  );
}

export default Cv;
