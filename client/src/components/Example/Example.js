import { React, useState, useEffect } from "react";
import "./Example.css";
import Axios from "axios";

function Example() {
  const [day, setday] = useState(0);
  const [done, setdone] = useState("");
  const [mood, setmood] = useState("");

  const [infolist, setinfolist] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/read").then((response) => {
      setinfolist(response.data);
    });
  }, []);

  const addToList = () => {
    Axios.post("http://localhost:3001/insert", {
      day: day,
      done: done,
      mood: mood,
    });
  };
  return (
    <div className="formcontainer">
      <h1>100 days of code blog</h1>
      <input
        type="number"
        placeholder="what number day is it"
        onChange={(e) => {
          setday(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="what I did today"
        onChange={(e) => {
          setdone(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="how my mood is after coding today"
        onChange={(e) => {
          setmood(e.target.value);
        }}
      />
      <button onClick={addToList}>Add to list</button>

      <h1>infolist</h1>

      {infolist.map((val, key) => {
        return (
          <div key={key}>
            <h4>Day number: {val.day}</h4>
            <h4>What I did today: {val.done}</h4>
            <h4>How I feel after coding: {val.mood}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default Example;
