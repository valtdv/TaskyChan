import React, { Component } from "react";
import autoBind from "react-autobind";
import "./css/GeneralView.css";
import AddButton from "../components/Buttons/AddButton";
import AddAct from "../components/Forms/AddForm";

class Activities extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  state = { show: false };

  showModal() {
    this.setState({ show: true });
  }

  closeModal() {
    this.setState({ show: false });
  }

  editTask = () => {
    //TODO: aca debería permitir editar la actividad
  };

  deleteTask = () => {
    if (window.confirm("Are you sure you want to delete this activity?")) {
      //TODO: aquí debería borrar la tarea y quitarla del conteiner y eliminar 1 al num de actividades
      //en progreso
      console.log("confirmado");
    }
  };

  render() {
    document.title = "Tasky chan! | Activities";
    return (
      <div className="Activites">
        <h1>Activities</h1>
        <AddAct
          className="ActForm"
          id="ActForm"
          Type="Act"
          show={this.state.show}
          close={this.closeModal}
        />
        <AddButton click={this.showModal} />
      </div>
    );
  }
}

export default Activities;
