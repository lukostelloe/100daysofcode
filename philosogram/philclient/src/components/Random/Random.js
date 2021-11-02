import { React, useState } from "react";
import "./Random.css";
import { Link } from "react-router-dom";

import thelads from "../images/thelads.jpg";
import aristotleimg from "../images/aristotle.jpg";
import bertrandimg from "../images/bertrand.jpg";
import humeimg from "../images/hume.jpg";
import platoimg from "../images/plato.jpg";
import socratesimg from "../images/socrates.jpg";

// const imageArray = [aristotleimg, bertrandimg, humeimg, platoimg, socratesimg];

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

// var randomimage = imageArray[Math.floor(Math.random() * imageArray.length)];
//test

function Random(props) {
  const [userselected, setuserselected] = useState("");
  const [imageused, setimageused] = useState(thelads);
  const [philname, setphilname] = useState("");

  const changeTick = () => {
    setuserselected(posts[Math.floor(Math.random() * posts.length)]);
    setimageused(userselected.image);
    setphilname(userselected.username);
  };

  return (
    <div className="container_random">
      <h1>Random Image Page</h1>
      <button onClick={changeTick}>Hit me with some philosophy</button>
      <div className="random_image">
        <img src={imageused} alt="hello" className="random_image" />
      </div>
      <div>
        <button>Follow {philname}</button>
        <button>
          <Link to="/philpage" className="link">
            Philpage
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Random;
