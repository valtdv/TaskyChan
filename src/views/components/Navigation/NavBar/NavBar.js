import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const responsiveIcon = () => {
    let nav = document.getElementById("NavBar");
    if (nav.classList.contains("NavBar")) {
      console.log("contains");
      nav.classList.toggle("responsive");
    }
  };

  return (
    <nav className="NavBar" id="NavBar">
      <div className="navbar-right">
        <a href="#Home">Home</a>
        <a href="#What">What is Tasky-chan</a>
        <a href="#Why">Why choose Tasky-chan</a>
        <a href="#Support">Support</a>
        <Link to="/register">Join us</Link>
        <a href="javascript:void(0);" className="icon" onClick={responsiveIcon}>
          <i className="fa fa-bars"></i>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
