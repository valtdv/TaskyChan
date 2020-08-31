import React, { Component } from "react";
import "./css/GeneralView.css"
import "./css/LogReg.css";
import LogForm from "../components/Forms/LogForm";
import RegForm from "../components/Forms/RegForm";
import Footer from "../components/Footer";
import happy from "../images/Tasky-happy-talking.png";
import annoyed from "../images/Tasky-annoyed-talking.png";

class LogReg extends Component {
  state = { isLogin: true, action: 'log in', title: "Log in" };

  changeView(logIn) {
    if (!logIn) {
      this.setState({ isLogin: false, action: 'register', title: "Register" });
    } else {
      this.setState({ isLogin: true, action: 'log in', title: "Log in" });
    }
  }

  render() {
    document.title = "Tasky chan! | " + this.state.title;
    document.body.style = "background: #454559";
    return (
      <div className="LogReg">
        <h1>Senpai, let me help you!</h1>
        <p className="instruction">To {this.state.action} fill out the form below</p>
        <div className="main">
          <img src={happy} alt="A picture of an anime highschool girl smiling" />
          {this.state.isLogin ? (
            <LogForm click={() => this.changeView(false)} />
          ) : (
            <RegForm click={() => this.changeView(true)} />
          )}
          <img src={annoyed} alt="A picture of an anime highschool girl with an annoyed face" />
        </div>
        <Footer />
      </div>
    );
  }
}

export default LogReg;
