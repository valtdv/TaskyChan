import React, { Component } from "react";
import NavBar from "../components/Navigation/NavBar";
import "./css/Landing.css";
import logo from "../images/taskylogo.png";
import Footer from "../components/Footer"

class LandingPage extends Component {
  render() {
    document.title = "Tasky chan! | Welcome to Tasky chan";
    return (
      <div>
        <header>
          <NavBar />
        </header>
        <Welcome />
        <What />
        <Why />
        <Support />
        <Footer />
      </div>
    );
  }
}

const Welcome = () => {
  return (
    <section className="Home" id="Home">
      <div className="title">
        <h1>
          Meet Tasky-chan! Your adorable kohai who will help put your agenda in
          order!
        </h1>
      </div>
      <img className="" src={logo} alt="" />
    </section>
  );
};

const What = () => {
  return <section className="What" id="What">
    <h2>What is Tasky-chan?</h2>
  </section>;
};

const Why = () => {
  return <section className="Why" id="Why">
    <h2>Why choose Tasky-chan</h2>
  </section>;
};

const Support = () => {
  return <section className="Support" id="Support"></section>;
};

export default LandingPage;
