import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact_page">
      <h2>Contact</h2>
      <div className="contact_page_and_form">
        <div className="contact_question">
          <h2>Got a question? I'd love to hear from you</h2>
        </div>
        <form className="contact_form">
          <label for="firstname">First Name</label>
          <input type="text" placeholder="First Name" />
          <label for="lastname">Last Name</label>
          <input type="text" placeholder="Last Name" />
          <label for="email">email</label>
          <input type="text" placeholder="email" />
          <label for="country">Country</label>
          <select for="country" placeholder="country">
            <option value="Ireland">Ireland</option>
            <option value="France">France</option>
            <option value="UK">UK</option>
            <option value="United States">United States</option>
          </select>
          <label for="subject">Subject</label>
          <textarea
            className="contact_textarea"
            id="subject"
            name="subject"
            placeholder="Write something"
            maxlength="500"
          ></textarea>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
