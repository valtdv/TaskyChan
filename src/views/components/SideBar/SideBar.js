import React, { Component } from "react";
import "./SideBar.css";
//import HamburgerButton from "../Buttons/HamburgerButton";

class SideBar extends Component {
  state = {
    labels: ["", "", "", "", "", "", ""],
    active: false,
  };

  iconHandler = () => {
    let navIcon = document.getElementById("nav-icon");
    navIcon.classList.toggle("open");
    this.widthHandler();
  };

  widthHandler = () => {
    let sideBar = document.getElementById("SideBar");
    if (!this.state.active) {
      sideBar.style.width = "175px";
      this.setState({
        labels: [
          "  Home",
          "  Tasks",
          "  Actvities",
          "  Advices",
          "  Reminders",
          "  Streaks",
          "  Facts",
        ],
        active: true,
      });
    } else {
      sideBar.style.width = "50px";
      this.setState({
        labels: ["", "", "", "", "", "", ""],
        active: false,
      });
    }
  };

  render() {
    return (
      <nav className="SideBar" id="SideBar">
        <a onClick={this.iconHandler}>
          <HamburgerButton />
        </a>
        <a id="home-view">
          <i className="fas fa-home"></i>
          {this.state.labels[0]}
        </a>
        <a id="task-view">
          <i className="fas fa-tasks"></i>
          {this.state.labels[1]}
        </a>
        <a id="activity-view">
          <i className="far fa-calendar-check"></i>
          {this.state.labels[2]}
        </a>
        <a id="advice-view">
          <i className="fas fa-heart"></i>
          {this.state.labels[3]}
        </a>
        <a id="reminder-view">
          <i className="fas fa-bell"></i>
          {this.state.labels[4]}
        </a>
        <a id="streak-view">
          <i className="fas fa-award"></i>
          {this.state.labels[5]}
        </a>
        <a id="fact-view">
          <i className="far fa-lightbulb"></i>
          {this.state.labels[6]}
        </a>
      </nav>
    );
  }
}

const HamburgerButton = () => {
  return (
    <div id="nav-icon">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default SideBar;
