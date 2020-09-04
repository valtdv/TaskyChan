import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";

const SideBar = () => {

  const [active, setActive] = useState(false);

  const [labels, setLabels] = useState(["", "", "", "", "", "", ""]);

  const iconHandler = () => {
    let navIcon = document.getElementById("nav-icon");
    navIcon.classList.toggle("open");
    widthHandler();
  };

  const widthHandler = () => {
    let sideBar = document.getElementById("SideBar");
    if (!active) {
      sideBar.style.width = "175px";
      setActive(true);
      setLabels([
        "  Home",
        "  Tasks",
        "  Actvities",
        "  Advices",
        "  Reminders",
        "  Streaks",
        "  Profile",
      ]);
    } else {
      sideBar.style.width = "50px";
      setActive(false);
      setLabels(["", "", "", "", "", "", ""]);
    }
  };
  return (
    <nav className="SideBar" id="SideBar">
      <a onClick={iconHandler}>
        <HamburgerButton />
      </a>
      <Link to="/">
        <i className="fas fa-home"></i>
        {labels[0]}
      </Link>
      <Link to="/Tasks">
        <i className="fas fa-tasks"></i>
        {labels[1]}
      </Link>
      <Link to="/Activities">
        <i className="far fa-calendar-check"></i>
        {labels[2]}
      </Link>
      <Link to="/Advices">
        <i className="fas fa-heart"></i>
        {labels[3]}
      </Link>
      <Link to="/Reminders">
        <i className="fas fa-bell"></i>
        {labels[4]}
      </Link>
      <Link to="/Streaks">
        <i className="fas fa-award"></i>
        {labels[5]}
      </Link>
      <Link to="/Profile">
        <i className="far fa-user"></i>
        {labels[6]}
      </Link>
    </nav>
  );
};

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
