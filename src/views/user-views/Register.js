import React, { Component } from "react";
import "./css/GeneralView.css"
import "./css/LogReg.css";
import RegForm from "../components/Forms/RegForm";
import congrats from "../images/Tasky-congratulations-talking.png";

class Register extends Component {
  render() {
    return (
      <div>
        <section className="Img-section Img-section-register">
          <h1>Senpai, do you want to join us?</h1>
          <img src={congrats} alt="" />
        </section>
        <section className="Form-section Form-section-register">
          <h2>Create an account</h2>
          <RegForm />
        </section>
      </div>
    );
  }
}

export default Register;
