import { React, useState } from "react";
import "./Input.css";

function Input() {
  const [formInput, setFormInput] = useState(false);
  const [done, setdone] = useState([]);
  const [mood, setmood] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();

    setdone(e.target[0].value);
    setmood(e.target[1].value);

    console.log(e.target[0].value, e.target[1].value);

    e.target[0].value = "";
    e.target[1].value = "";

    setFormInput(true);
  };

  return (
    <div className="formcontainer">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="formcontainer_done"
          placeholder="what you did today"
        ></input>
        <input
          type="text"
          className="formcontainer_mood"
          placeholder="how your mood is after one hour"
        ></input>
        <button>Submit</button>
      </form>
      <div>
        {formInput ? (
          <div>
            <div>What I did today: {done}</div>
            <div>What I felt after one hour of coding: {mood}</div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default Input;
