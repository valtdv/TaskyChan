import React, { Component } from "react";
import "./css/GeneralView.css";
import "./components/Forms/AddStreak"
import AddButton from "./components/Buttons/AddButton";
import AddStreak from "./components/Forms/AddStreak";

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
        <AddStreak className={this.state.className} />
        <AddButton click={this.showModal.bind(this)} />
      </div>
    );
  }
}

export default Streaks;
