import React, { Component } from "react";
import SpeachBubble from "./components/SpeachBubble";
import "./css/GeneralView.css";
import "./css/Home.css";
import happy from "./images/Tasky-happy-talking.png";
import SpeechBubble from "./components/SpeachBubble";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <h1>Welcome back, senpai! I missed you!</h1>
        <div className="main">
          <SpeechBubble text="user-name, you have set for today X activites and X reminders, and have X tasks unfinished left" />
          <img
            className="tasky-img"
            src={happy}
            alt="A picture of an anime highschool girl smiling"
          />
        </div>
      </div>
    );
  }
}

export default Home;
