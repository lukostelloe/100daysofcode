import { React, useState } from "react";
import Data from "../../data.json";
import "./Input.css";

function Input() {
  const [formInput, setFormInput] = useState(false);
  const [day, setday] = useState("");
  const [done, setdone] = useState("");
  const [mood, setmood] = useState("");

  function onSubmit(e) {
    setFormInput(true);
    e.preventDefault();

    Data.push({ day, done, mood });
    console.log(Data);
  }

  return (
    <div className="formcontainer">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={day}
          onChange={(e) => setday(e.target.value)}
          placeholder="what day is it"
        ></input>
        <input
          type="text"
          value={done}
          onChange={(e) => setdone(e.target.value)}
          placeholder="what you did today"
        ></input>
        <input
          type="text"
          value={mood}
          onChange={(e) => setmood(e.target.value)}
          placeholder="how your mood is after one hour"
        ></input>
        <button>Submit</button>
      </form>
      <div>
        {formInput ? (
          <div>
            <div>What day it is: {day}</div>
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
