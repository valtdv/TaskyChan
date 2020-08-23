import React, { Component } from "react";
import "./css/Tasks.css";
import AddButton from "./components/Buttons/AddButton";
import Container from "./components/Container";
import Task from "./components/Task";

class Tasks extends Component {
  showModal(){
      
  }
  render() {
    return (
      <div className="Tasks">
        <h1></h1>
        <Container>
          <Task title="Hacer el taller de compiladores" />
          
        </Container>
        <AddButton />
      </div>
    );
  }
}

export default Tasks;