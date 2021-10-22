import React, { useState, useRef } from "react";
import "./Musicmood.css";

import audio1 from "./audiosamples/anxiouscountry.mp3";
import audio2 from "./audiosamples/anxiousjazz.mp3";
import audio3 from "./audiosamples/anxiousrock.mp3";
import audio4 from "./audiosamples/calmcountry.mp3";
import audio5 from "./audiosamples/calmjazz.mp3";
import audio6 from "./audiosamples/calmrock.mp3";
import audio7 from "./audiosamples/excitedcountry.mp3";
import audio8 from "./audiosamples/excitedjazz.mp3";
import audio9 from "./audiosamples/excitedrock.mp3";
import audio10 from "./audiosamples/funkycountry.mp3";
import audio11 from "./audiosamples/funkyjazz.mp3";
import audio12 from "./audiosamples/funkyrock.mp3";
import audio13 from "./audiosamples/happycountry.mp3";
import audio14 from "./audiosamples/happyjazz.mp3";
import audio15 from "./audiosamples/happyrock.mp3";
import audio16 from "./audiosamples/sadcountry.mp3";
import audio17 from "./audiosamples/sadjazz.mp3";
import audio18 from "./audiosamples/sadrock.mp3";

const moodOptions = [
  {
    moods: "anxious",
    styles: "country",
    audio: audio1,
  },
  {
    moods: "anxious",
    styles: "jazz",
    audio: audio2,
  },
  {
    moods: "anxious",
    styles: "rock",
    audio: audio3,
  },
  {
    moods: "calm",
    styles: "country",
    audio: audio4,
  },
  {
    moods: "calm",
    styles: "jazz",
    audio: audio5,
  },
  {
    moods: "calm",
    styles: "rock",
    audio: audio6,
  },
  {
    moods: "excited",
    styles: "country",
    audio: audio7,
  },
  {
    moods: "excited",
    styles: "jazz",
    audio: audio8,
  },
  {
    moods: "excited",
    styles: "rock",
    audio: audio9,
  },
  {
    moods: "funky",
    styles: "country",
    audio: audio10,
  },
  {
    moods: "funky",
    styles: "jazz",
    audio: audio11,
  },
  {
    moods: "funky",
    styles: "rock",
    audio: audio12,
  },
  {
    moods: "happy",
    styles: "country",
    audio: audio13,
  },
  {
    moods: "happy",
    styles: "jazz",
    audio: audio14,
  },
  {
    moods: "happy",
    styles: "rock",
    audio: audio15,
  },
  {
    moods: "sad",
    styles: "country",
    audio: audio16,
  },
  {
    moods: "sad",
    styles: "jazz",
    audio: audio17,
  },
  {
    moods: "sad",
    styles: "rock",
    audio: audio18,
  },
];

export default function MusicMood() {
  const [userMoods, setUserMoods] = useState([]);
  const [userStyles, setUserStyles] = useState([]);
  const [audioResults, setAudioResults] = useState([]);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef();
  const progressBar = useRef();

  //PLACE SELECTED OPTIONS INTO AN ARRAY, ONE FOR MOODS...
  function onMoodChange(e) {
    console.log(e.target.id);
    const { id } = e.target;

    if (userMoods.includes(id)) {
      setUserMoods(userMoods.filter((md) => id !== md));
    } else {
      setUserMoods([id]);
    }
  }

  ////...AND ONE FOR STYLES
  function onMoodChange1(e) {
    console.log(e.target.id);
    const { id } = e.target;

    if (userStyles.includes(id)) {
      setUserStyles(userStyles.filter((md) => id !== md));
    } else {
      setUserStyles([id]);
    }
  }

  //SET RESULTS TO AUDIO ON SUBMIT
  function onSubmit(e) {
    e.preventDefault();

    for (let i = 0; i < moodOptions.length; i++) {
      if (
        userMoods.includes(moodOptions[i].moods) &&
        userStyles.includes(moodOptions[i].styles)
      ) {
        setAudioResults(moodOptions[i]);
        setPlaying(true);
      }
    }
  }

  //PLAY...
  function playerPlay() {
    if (playing === false) {
      audioRef.current.play();
      setPlaying(true);
    }
  }

  ///...AND PAUSE
  function playerPause() {
    if (playing === true) {
      audioRef.current.pause();
      setPlaying(false);
    }
  }

  //FUNCTION TO CONVERT CURRENT TIME AND DURATION INTO HUMAN READABLE VALUES
  function formatTime(s) {
    const addLeadingZero = (n, place) => String(n).padStart(place, "0");
    const minutes = addLeadingZero(Math.floor((s % 3600) / 60), 2);
    const seconds = addLeadingZero(Math.floor((s % 3600) % 60), 2);
    return `${minutes}:${seconds}`;
  }

  //DISPLAY SONG DURATION
  function initPlayer() {
    setDuration(audioRef.current.duration);
  }

  //DISPLAY SONG CURRENT TIME
  function handleCurrentTimeUpdate() {
    setCurrentTime(audioRef.current.currentTime);
  }

  //SET THE TIME ON THE RANGE BAR
  const setTime = (time) => {
    audioRef.current.currentTime = time;
  };

  //RENDER THE RESULTS
  function renderResults() {
    if (Object.keys(audioResults).length > 0) {
      return (
        <div className="result_container">
          <p>
            Your song is {audioResults.moods} with a {audioResults.styles}{" "}
            style!
          </p>
          <audio
            autoPlay
            src={audioResults.audio}
            ref={audioRef}
            onLoadedMetadata={initPlayer}
            onTimeUpdate={handleCurrentTimeUpdate}
            preload="metadata"
          />

          <div className="player">
            <span className="player_songname">
              Mood: {audioResults.moods}
              {"  "} Style: {audioResults.styles}
            </span>
            <button
              type="button"
              className="player_dot"
              onClick={playing ? playerPause : playerPlay}
            >
              {playing ? (
                <div className="player_pause">
                  <div className="player_pauseline"></div>
                </div>
              ) : (
                <div className="player_play"></div>
              )}
            </button>
            <span className="player_timedisplay">
              {formatTime(currentTime)}
              {" /"}
              {formatTime(duration)}
            </span>
            <input
              type="range"
              className="player_rangebar"
              ref={progressBar}
              min="0"
              max={duration}
              value={currentTime}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <p>Please select a mood and a style for your song</p>
        </div>
      );
    }
  }

  return (
    <div className="container">
      <h1>Music Mood</h1>
      <form onSubmit={onSubmit} className="form">
        <div className="container_select">
          <h2>Mood</h2>
          <div className="radio">
            <input
              className="radio_input"
              name={"radio"}
              id="happy"
              onChange={onMoodChange}
              type="radio"
            />
            <label className="radio_label" htmlFor="happy">
              🙂
            </label>
            <input
              className="radio_input"
              name={"radio"}
              id="sad"
              onChange={onMoodChange}
              type="radio"
            />
            <label className="radio_label" htmlFor="sad">
              😢
            </label>
            <input
              className="radio_input"
              name={"radio"}
              id="excited"
              onChange={onMoodChange}
              type="radio"
            />
            <label className="radio_label" htmlFor="excited">
              😃
            </label>
            <input
              className="radio_input"
              name={"radio"}
              id="funky"
              onChange={onMoodChange}
              type="radio"
            />
            <label className="radio_label" htmlFor="funky">
              😎
            </label>
            <input
              className="radio_input"
              name={"radio"}
              id="anxious"
              onChange={onMoodChange}
              type="radio"
            />
            <label className="radio_label" htmlFor="anxious">
              😰
            </label>
          </div>
          <h2>Style</h2>
          <div className="radio">
            <input
              className="radio_input"
              name={"radio1"}
              id="jazz"
              onChange={onMoodChange1}
              type="radio"
            />
            <label className="radio_label" htmlFor="jazz">
              Jazz
            </label>
            <input
              className="radio_input"
              name={"radio1"}
              id="country"
              onChange={onMoodChange1}
              type="radio"
            />
            <label className="radio_label" htmlFor="country">
              Country
            </label>
            <input
              className="radio_input"
              name={"radio1"}
              id="rock"
              onChange={onMoodChange1}
              type="radio"
            />
            <label className="radio_label" htmlFor="rock">
              Rock
            </label>
          </div>
          <button type="submit" className="submitButton">
            PLAY
          </button>
        </div>
      </form>
      <div>{renderResults()}</div>
    </div>
  );
}
