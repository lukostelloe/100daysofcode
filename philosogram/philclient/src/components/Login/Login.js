import React from "react";
import "./Login.css";
// import frontimage from "../images/philosogram.jpg";

function Login() {
  const handleSubmit = () => {
    console.log("log in button");
  };

  return (
    <div className="login_container">
      <div className="description_and_shadow">
        <div className="container_description">
          <h1 className="container_description_heading">philosogram</h1>
          <p>follow the world's most influential philosophers</p>
        </div>
        <div className="oval1"></div>
      </div>
      <div className="form_and_shadow">
        <div className="container_form">
          <form onSubmit={handleSubmit} className="container_form_form">
            <input
              type="text"
              placeholder="Email address or phone number"
              className="form_input"
            />
            <input type="text" placeholder="Password" className="form_input" />
            <button type="submit" className="form_login_button">
              Log In
            </button>
          </form>
          <a href="/" className="form_login_forgot">
            Forgotten Password?
          </a>
          <button className="form_login_create">Create New Account</button>
        </div>
        <div className="oval2"></div>
      </div>
    </div>
  );
}

export default Login;
