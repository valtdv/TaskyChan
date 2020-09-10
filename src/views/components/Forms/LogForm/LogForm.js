import React from "react";
import { Link } from "react-router-dom";
import "../Form.css";

const LogForm = (props) => {
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
        <p>You don't have an account? <Link to="/register">Register!</Link></p>
      </div>
    </form>
  );
}

export default LogForm;