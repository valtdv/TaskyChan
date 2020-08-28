import React from "react";
import "./Card.css";

const Card = (props) => {
  const enableEdition = () => {};
  return (
    <div className="Card">
      <div className="card-left">
        <h2>Senpai's info</h2>
        <form className="info">
          <div className="labelInput">
            <label>Name: </label>
            <input type="text" disabled />
          </div>
          <div className="labelInput">
            <label>E-mail: </label>
            <input type="text" disabled />
          </div>
          <div className="labelInput">
            <label>Password: </label>
            <input type="password" disabled value={props.password} />
          </div>
          <div className="btns">
            <input type="button" value="Edit" onClick={enableEdition} />
            <input type="submit" value="Save" disabled />
            <input type="button" value="Cancel" disabled />
          </div>
        </form>
      </div>
      <div className="card-right">
        <h2>Senpai's records</h2>
      </div>
    </div>
  );
};

export default Card;
