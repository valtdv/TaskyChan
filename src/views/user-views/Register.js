import React, { Component } from "react";
import "./css/GeneralView.css"
import "./css/LogReg.css";
import RegForm from "../components/Forms/RegForm";

class Register extends Component {
  render() {
    return (
      <div>
        <section className="Img-section Img-section-register"></section>
        <section className="Form-section Form-section-register"></section>
      </div>
    );
  }
}

export default Register;
