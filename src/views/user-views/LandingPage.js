import React, { Component } from "react";
import NavBar from "../components/Navigation/NavBar";
import "./css/Landing.css"
//import Footer from "../components/Footer"

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
        <How />
        <Support />
        {/*<Footer />*/}
      </div>
    );
  }
}

const Welcome = () => {
  return (
    <section className="Home" id="Home">
      <div className="section-left"></div>
      <div className="section-right"></div>
    </section>
  );
};

const What = () => {
  return <section className="What" id="What"></section>;
};

const Why = () => {
  return <section className="Why" id="Why"></section>;
};

const How = () => {
  return <section className="How" id="How"></section>;
};

const Support = () => {
  return <section className="Support" id="Support"></section>;
};

export default LandingPage;
