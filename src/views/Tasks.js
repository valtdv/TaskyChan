import React, { Component } from "react";
import "./css/GeneralView.css";
import AddButton from "./components/Buttons/AddButton";
import AddTask from "./components/Forms/AddForm";
import Container from "./components/Container";
import Task from "./components/Task";

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
        <h1>Senpai, remember to finish your tasks! I believe in you!</h1>
        <AddTask className={this.state.className} id="TaskForm" />
        <Container>
          <Task title="Hacer el taller de compiladores" />
        </Container>
        <AddButton click={this.showModal.bind(this)} />
      </div>
    );
  }
}

export default Tasks;
