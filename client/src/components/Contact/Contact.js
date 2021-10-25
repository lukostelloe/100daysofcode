import React from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import "./Contact.css";

//I NEED TO PUT THESE IN A SECURE ENV FILE
const SERVICE_ID = "service_9py45ch";
const TEMPLATE_ID = "template_d5ic7px";
const USER_ID = "user_iBfg6gc7k8Y9C7UjJiN5Z";

function Contact() {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };

  return (
    <div className="contact_page">
      <h2>Contact</h2>
      <div className="contact_page_and_form">
        <div className="contact_question">
          <h2>Got a question? I'd love to hear from you</h2>
        </div>
        <form className="contact_form" onSubmit={handleOnSubmit}>
          <input type="text" placeholder="name" name="from_name" />
          <input type="text" placeholder="email" name="from_email" />
          <textarea
            className="contact_textarea"
            placeholder="Write something"
            maxLength="500"
            name="from_message"
          ></textarea>
          <button type="submit" value="Submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );

  // <div className="App">
  //   <form onSubmit={handleOnSubmit}>
  //     <input
  //       id="form-input-control-email"
  //       control={Input}
  //       label="Email"
  //       name="user_email"
  //       placeholder="Email…"
  //       required
  //       icon="mail"
  //       iconPosition="left"
  //     />
  //     <input
  //       id="form-input-control-last-name"
  //       control={Input}
  //       label="Name"
  //       name="user_name"
  //       placeholder="Name…"
  //       required
  //       icon="user circle"
  //       iconPosition="left"
  //     />
  //     <input
  //       id="form-textarea-control-opinion"
  //       control={TextArea}
  //       label="Message"
  //       name="user_message"
  //       placeholder="Message…"
  //       required
  //     />
  //     <button type="submit" color="green">
  //       Submit
  //     </button>
  //   </form>
  // </div>
  // );
}

export default Contact;
