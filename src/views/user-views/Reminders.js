import React, { Component } from "react";
import autoBind from "react-autobind";
import "./css/GeneralView.css";
import AddReminder from "../components/Forms/AddReminder";
import AddButton from "../components/Buttons/AddButton";

class Reminders extends Component {
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

  render() {
    document.title = "Tasky chan! | Reminders";
    return (
      <div className="Reminders">
        <h1>Reminders</h1>
        <main></main>
        <AddReminder show={this.state.show} close={this.closeModal} />
        <AddButton click={this.showModal} />
      </div>
    );
  }
}

export default Reminders;
