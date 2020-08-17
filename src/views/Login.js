import React, { Component } from "react";
import "./css/LogReg.css";
import LogForm from "./components/Forms/LogForm";
import Footer from "./components/Footer";
import happy from "./images/Tasky-happy-talking.png";
import annoyed from "./images/Tasky-annoyed-talking.png";

class Login extends Component {
  changeView() {
    alert("Hello! I am an alert box!!");
  }

  render() {
    document.body.style = "background: #454559";
    return (
      <div className="Login">
        <h1>Senpai, let me help you!</h1>
        <p className="instruction">To log in fill out the form below</p>
        <div className="main">
          <img src={happy} alt="" />
          <div id="formContainer">
            <LogForm click={this.changeView} />
          </div>
          <img src={annoyed} alt="" />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Login;
