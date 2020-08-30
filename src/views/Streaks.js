import React, { Component } from "react";
import autoBind from 'react-autobind';
import "./css/GeneralView.css";
import "./components/Forms/AddStreak";
import Container from "./components/Container";
import Streak from "./components/Layouts/Streak";
import AddButton from "./components/Buttons/AddButton";
import AddStreak from "./components/Forms/AddStreak";
import SpeechBubble from "./components/SpeachBubble";
import congrats from "./images/Tasky-congratulations-talking.png"

class Streaks extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  state = {show: false};

  showModal(){
    this.setState({ show: true });
  }

  closeModal(){
    this.setState({ show: false });
  }

  render() {
    document.title = "Tasky chan! | Streaks";
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
        <AddButton click={this.showModal} />
        <AddStreak show={this.state.show} close={this.closeModal} />
      </div>
    );
  }
}

export default Streaks;
