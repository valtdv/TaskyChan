import React, { Component } from "react";
import "./css/GeneralView.css"
import "./css/LogReg.css";
import LogForm from "../components/Forms/LogForm";

class Login extends Component {
  render() {
    return (
      <div>
        <section className="Form-section Form-section-login"></section>
        <section className="Img-section Img-section-login"></section>
      </div>
    );
  }
}

export default Login;