import React, { Component } from "react";
import "./css/GeneralView.css"
import "./css/LogReg.css";
import LogForm from "../components/Forms/LogForm";
import annoyed from "../images/Tasky-annoyed-talking.png";

class Login extends Component {
  render() {
    return (
      <div>
        <section className="Form-section Form-section-login">
          <h2>Log in to your account</h2>
          <LogForm />
        </section>
        <section className="Img-section Img-section-login">
          <h1>Senpai, why haven't you logged in?!</h1>
          <img src={annoyed} alt="" />
        </section>
      </div>
    );
  }
}

export default Login;