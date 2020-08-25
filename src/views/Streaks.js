import React, { Component } from "react";
import "./css/GeneralView.css";
import "./components/Forms/AddStreak";
import Container from "./components/Container";
import Streak from "./components/Layouts/Streak";
import AddButton from "./components/Buttons/AddButton";
import AddStreak from "./components/Forms/AddStreak";
import SpeechBubble from "./components/SpeachBubble";
import congrats from "./images/Tasky-congratulations-talking.png"

class Streaks extends React.Component {
  state = {show: false};

  showModal(){
    this.setState({ show: true });
  }

  closeModal(){
    this.setState({ show: false });
    console.log(this.state.show);
  }

  render() {
    return (
      <div className="Streaks">
        <h1>Streaks</h1>
        <main>
          <Container>
            <Streak title="Dejar de comerme las uñas" days="1" />
          </Container>
          <div className="TaskyBubble">
            <SpeechBubble text="Senpai, you're really brave for starting or leaving this habits! I'm really proud of you! Keep going! I'll help you the best I can" />
            <img
              className="TaskyImg"
              src={congrats}
              alt="A very happy anime schoolgirl giving some instructions."
            />
          </div>
        </main>
        <AddButton click={this.showModal.bind(this)} />
        <AddStreak show={this.state.show} close={this.closeModal.bind(this)} />
      </div>
    );
  }
}

export default Streaks;
