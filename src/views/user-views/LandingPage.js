import React, { Component } from "react";
import NavBar from "../components/Navigation/NavBar";
import "./css/Landing.css";
//COMPONENTS
import logo from "../images/taskylogo.png";
import Card from "../components/Cards/SquareCard";
import SupportForm from "../components/Forms/SupportForm";
import Footer from "../components/Footer";

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
  return (
    <section className="What" id="What">
      <h2>What is Tasky-chan?</h2>
      <p></p>
    </section>
  );
};

const Why = () => {
  return (
    <section className="Why" id="Why">
      <h2>Why choose Tasky-chan</h2>
      <div className="CardContainer">
        <Card title="" content="" />
        <Card title="" content="" />
        <Card title="" content="" />
      </div>
    </section>
  );
};

const Support = () => {
  return (
    <section className="Support" id="Support">
      <h2>Need help?</h2>
      <p>
        If you have any doubts or problems with our product don't be shy and
        fill this form with any questions you may have.
      </p>
      <SupportForm />
    </section>
  );
};

export default LandingPage;
