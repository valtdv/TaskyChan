import React, { Component } from "react";
import "./css/GeneralView.css";
import "./css/Tasks.css"
import AddButton from "./components/Buttons/AddButton";
import AddTask from "./components/Forms/AddForm";
import Container from "./components/Container";
import Task from "./components/noseque/Task";
import SpeechBubble from "./components/SpeachBubble";
import annoyed from "./images/Tasky-annoyed-talking.png"

class Tasks extends Component {
  state = { className: "TaskForm Hidden", isShowing: false };
  showModal() {
    if (this.state.isShowing) {
      this.setState({ className: "TaskForm Hidden", isShowing: false });
    } else {
      this.setState({ className: "TaskForm", isShowing: true });
    }
  }
  render() {
    return (
      <div className="Tasks">
        <h1>Tasks</h1>
        <main>
          <Container>
            <Task title="Hacer el taller de compiladores" />
          </Container>
          <div className="TaskyBubble">
            <SpeechBubble text="Senpai, remember to finish your tasks before their deadline. Cheating is not allowed! I wil get mad if you do it! And if you have no task add more! Don't be lazy!" />
            <img className="TaskyImg" src={annoyed} alt="An annoyed anime school girl giving some instructions" />
          </div>
        </main>
        <AddTask className={this.state.className} id="TaskForm" />
        <AddButton click={this.showModal.bind(this)} />
      </div>
    );
  }
}

export default Tasks;
