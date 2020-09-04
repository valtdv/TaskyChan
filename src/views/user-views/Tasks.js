import React, { Component } from "react";
import autoBind from "react-autobind";
import "./css/GeneralView.css";
import AddButton from "../components/Buttons/AddButton";
import AddTask from "../components/Forms/AddForm";
import Container from "../components/Container";
import Task from "../components/Layouts/Task";
import SpeechBubble from "../components/SpeachBubble";
import annoyed from "../images/Tasky-annoyed-talking.png";

class Tasks extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  state = { show: false };

  finishedTask = () => {
    let check = document.getElementById("finishedTask");
    if (check.checked === true) {
      if (window.confirm("Are you sure you want to check this task as finished?")) {
        console.log("confirmado");
        check.checked = false;
        //TODO: aqui debería entonces cambiar el estatus a tarea realizada, quitarla del conteiner 
        //y sumarle 1 al número de tareas realizadas
      } else {
        check.checked = false;
      }
    }
  };

  editTask = () => {
    //TODO: aca debería permitir editar la tarea
  }

  deleteTask = () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      //TODO: aquí debería borrar la tarea y quitarla del conteiner y eliminar 1 al num de tareas en 
      //progreso
      console.log("confirmado");
    }
  }

  showModal() {
    this.setState({ show: true });
  }

  closeModal() {
    this.setState({ show: false });
  }

  render() {
    document.title = "Tasky chan! | Tasks";
    return (
      <div className="Tasks">
        <h1>Tasks</h1>
        <main>
          <Container>
            <Task
              title="Hacer el taller de compiladores"
              onchange={this.finishedTask} delete={this.deleteTask}
            />
          </Container>
          <div className="TaskyBubble">
            <SpeechBubble text="Senpai, remember to finish your tasks before their deadline. Cheating is not allowed! I wil get mad if you do it! And if you have no task add more! Don't be lazy!" />
            <img
              className="TaskyImg"
              src={annoyed}
              alt="An annoyed anime school girl giving some instructions"
            />
          </div>
        </main>
        <AddTask
          className="TaskForm"
          id="TaskForm"
          Type="Task"
          show={this.state.show}
          close={this.closeModal}
        />
        <AddButton click={this.showModal} />
      </div>
    );
  }
}

export default Tasks;
