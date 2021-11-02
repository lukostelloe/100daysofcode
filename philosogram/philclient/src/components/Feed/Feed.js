import React from "react";
import "./Feed.css";

import aristotleimg from "../images/aristotle.jpg";
import bertrandimg from "../images/bertrand.jpg";
import humeimg from "../images/hume.jpg";
import platoimg from "../images/plato.jpg";
import socratesimg from "../images/socrates.jpg";

const posts = [
  {
    username: "Aristotle",
    image: aristotleimg,
    comment: "felt cute, might delete",
  },
  { username: "Bertrand", image: bertrandimg, comment: "what's up dawgs" },
  { username: "Hume", image: humeimg, comment: "hi im hume" },
  { username: "Plato", image: platoimg, comment: "plato likes tayto" },
  { username: "Socrates", image: socratesimg, comment: "hehehehe" },
];

function Feed() {
  return (
    <div className="feed_container">
      {posts.map((m) => {
        return (
          <div className="container_card">
            <b>{m.username}</b>
            <img src={m.image} alt="hello" className="container_card_image" />
            <p>{m.comment}</p>
            <div className="input_div">
              <button>😊</button>
              <input
                type="text"
                className="comment"
                placeholder="Add a comment"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Feed;
