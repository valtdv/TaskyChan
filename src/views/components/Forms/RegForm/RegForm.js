import React from "react";
import { Link } from "react-router-dom";
import "../Form.css";

const RegForm = (props) => {
  return (
    <form className="RegForm">
      <div className="labelInput">
        <label>Name:</label>
        <input type="text" id="name" name="name" placeholder="Ex: Yuna" required />
      </div>
      <div className="labelInput">
        <label>E-mail:</label>
        <input type="text" id="email" name="email" placeholder="Ex: yuna@tasky.com" required />
      </div>
      <div className="labelInput">
        <label>Password:</label>
        <input type="password" id="pass" name="pass" placeholder="******" required />
      </div>
      <div className="labelInput">
        <label>Confirm password:</label>
        <input type="password" id="cpass" name="cpass" placeholder="******" required />
      </div>
      <div className="subBtn">
        <input type="submit" value="Register!" />
        <p>Do you already have an account? <Link to="/login">Log in!</Link></p>
      </div>
    </form>
  );
}

export default RegForm;