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
  state = { className: "AddStreak Hidden", isShowing: false };
  showModal() {
    if (this.state.isShowing) {
      this.setState({ className: "AddStreak Hidden", isShowing: false });
    } else {
      this.setState({ className: "AddStreak", isShowing: true });
    }
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
            <SpeechBubble text="Senpai, you're really brave for starting or leaving habits! I'm really proud of you! Keep going!" />
            <img
              className="TaskyImg"
              src={congrats}
              alt="school girl saying some information"
            />
          </div>
        </main>
        <AddStreak className={this.state.className} />
        <AddButton click={this.showModal.bind(this)} />
      </div>
    );
  }
}

export default Streaks;
