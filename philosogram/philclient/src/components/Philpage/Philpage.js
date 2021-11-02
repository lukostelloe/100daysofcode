import React from "react";
import "./Philpage.css";

import aristotleimg from "../images/aristotle.jpg";
import bertrandimg from "../images/bertrand.jpg";
import humeimg from "../images/hume.jpg";
import platoimg from "../images/plato.jpg";
import socratesimg from "../images/socrates.jpg";

function Philpage() {
  const posts = [
    {
      username: "Aristotle",
      image: aristotleimg,
      comment: "felt cute, might delete",
      bio: "Aristotle was a cool dude who did this and that",
    },
    { username: "Bertrand", image: bertrandimg, comment: "what's up dawgs" },
    { username: "Hume", image: humeimg, comment: "hi im hume" },
    { username: "Plato", image: platoimg, comment: "plato likes tayto" },
    { username: "Socrates", image: socratesimg, comment: "hehehehe" },
  ];

  console.log(posts[0].username);

  return (
    <div className="philpage_app">
      <div>This is the page of {posts[0].username}</div>
      <img src={posts[0].image} alt="hi" className="userimage" />
      <div>{posts[0].bio}</div>
    </div>
  );
}

export default Philpage;
