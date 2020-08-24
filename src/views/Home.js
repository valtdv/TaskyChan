import React, { Component } from "react";
import SpeechBubble from "./components/SpeachBubble";
import "./css/GeneralView.css";
import happy from "./images/Tasky-happy-talking.png";
import SpeechBubble from "./components/SpeachBubble";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>Welcome back, senpai! I missed you!</h1>
        <div className="main-home">
          <SpeechBubble text="user-name, you have set for today X activites and X reminders, and have X tasks unfinished left" />
          <img
            className="TaskyImg"
            src={happy}
            alt="A picture of an anime highschool girl smiling"
          />
        </div>
      </div>
    );
  }
}

export default Home;
