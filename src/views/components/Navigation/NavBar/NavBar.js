import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = (props) => {
  const responsiveIcon = () => {
    let nav = document.getElementById("myTopnav");
    if (nav.classList.contains("NavBar")) {
      nav.classList.toggle("responsive");
    }
  };

  return (
    <nav className="NavBar" id="NavBar">
      <a href="#">Home</a>
      <a href="#">About us</a>
      <Link to="/register">
        Join us
      </Link>
      <a href="javascript:void(0);" className="icon" onClick={responsiveIcon}>
        <i className="fa fa-bars"></i>
      </a>
    </nav>
  );
};

export default NavBar;
