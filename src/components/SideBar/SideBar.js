import React, { Component } from "react";
import "./SideBar.css";
import HamburgerButton from "../HamburgerButton/HamburgerButton";

class SideBar extends React.Component {
  state = {
    labels: ["", "", "", "", "", false],
  };

  viewHandler = () =>{

  }

  widthHandler = () => {
    let sideBar = document.getElementById("SideBar");
    if (!this.state.labels[5]) {
      sideBar.style.width = "175px";
      this.setState({
        labels: [
          "  Home",
          "  Tasks",
          "  Advices",
          "  Reminders",
          "  Streaks",
          true,
        ],
      });
    } else {
      sideBar.style.width = "50px";
      this.setState({
        labels: ["", "", "", "", "", false],
      });
    }
  };

  render() {
    return (
      <nav className="SideBar" id="SideBar">
        <a onClick={this.widthHandler}>
          <HamburgerButton />
        </a>
        <a id='home-view'>
          <i className="fas fa-home"></i>
          {this.state.labels[0]}
        </a>
        <a id='task-view'>
          <i className="fas fa-tasks"></i>
          {this.state.labels[1]}
        </a>
        <a id='advice-view'>
          <i className="fas fa-heart"></i>
          {this.state.labels[2]}
        </a>
        <a id='reminder-view'>
          <i className="fas fa-bell"></i>
          {this.state.labels[3]}
        </a>
        <a id='streak-view'>
          <i className="fas fa-award"></i>
          {this.state.labels[4]}
        </a>
      </nav>
    );
  }
}

export default SideBar;
