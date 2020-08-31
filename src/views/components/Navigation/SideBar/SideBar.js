import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";

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
          "  Profile",
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
        <Link to="/">
          <i className="fas fa-home"></i>
          {this.state.labels[0]}
        </Link>
        <Link to="/Tasks">
          <i className="fas fa-tasks"></i>
          {this.state.labels[1]}
        </Link>
        <Link to="/Activities">
          <i className="far fa-calendar-check"></i>
          {this.state.labels[2]}
        </Link>
        <Link to="/Advices">
          <i className="fas fa-heart"></i>
          {this.state.labels[3]}
        </Link>
        <Link to="/Reminders">
          <i className="fas fa-bell"></i>
          {this.state.labels[4]}
        </Link>
        <Link to="/Streaks">
          <i className="fas fa-award"></i>
          {this.state.labels[5]}
        </Link>
        <Link to="/Profile">
          <i className="far fa-user"></i>
          {this.state.labels[6]}
        </Link>
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
