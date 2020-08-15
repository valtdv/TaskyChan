import React, { Component } from "react";
import "../Form.css";

class LogForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form className="LogForm">
        <div className="labelInput">
          <label>E-mail:</label>
          <input type="text" id="email" name="email" placeholder="Ex: yuna@tasky.com" required />
        </div>
        <div className="labelInput">
          <label>Password:</label>
          <input type="password" id="pass" name="pass" placeholder="******" required />
        </div>
        <div className="subBtn">
          <input type="submit" value="Log in!" />
          <p>You don't have an account? <a href="#">Register!</a></p>
        </div>
      </form>
    );
  }
}

export default LogForm;