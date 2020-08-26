import React, { Component } from "react";
import autoBind from 'react-autobind';
import "./css/GeneralView.css";
import AddButton from "./components/Buttons/AddButton";
import AddTask from "./components/Forms/AddForm";
import Container from "./components/Container";
import Task from "./components/Layouts/Task";
import SpeechBubble from "./components/SpeachBubble";
import annoyed from "./images/Tasky-annoyed-talking.png"

class Tasks extends Component {
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
        <AddTask className="TaskForm" id="TaskForm" show={this.state.show} close={this.closeModal} />
        <AddButton click={this.showModal} />
      </div>
    );
  }
}

export default Tasks;
