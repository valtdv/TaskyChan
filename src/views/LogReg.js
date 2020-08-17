import React, { Component } from "react";
import "./css/LogReg.css";
import LogForm from "./components/Forms/LogForm";
import RegForm from "./components/Forms/RegForm";
import Footer from "./components/Footer";
import happy from "./images/Tasky-happy-talking.png";
import annoyed from "./images/Tasky-annoyed-talking.png";

class LogReg extends Component {
  state = { isLogin: true };

  changeView(logIn) {
    if (!logIn) {
      this.setState({ isLogin: false });
    } else {
      this.setState({ isLogin: true });
    }
  }

  render() {
    document.body.style = "background: #454559";
    return (
      <div className="LogReg">
        <h1>Senpai, let me help you!</h1>
        <p className="instruction">To log in fill out the form below</p>
        <div className="main">
          <img src={happy} alt="" />
          {this.state.isLogin ? (
            <LogForm click={() => this.changeView(false)} />
          ) : (
            <RegForm click={() => this.changeView(true)} />
          )}
          <img src={annoyed} alt="" />
        </div>
        <Footer />
      </div>
    );
  }
}

export default LogReg;
