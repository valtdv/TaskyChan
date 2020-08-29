import React from "react";
import "./Card.css";
import profile from "../../images/User-Profile.png"

const Card = (props) => {
  const enableEdition = () => {
    const inputs = document.getElementsByTagName("input");
    for (let input of inputs) {
      if (input.id === "Edit") {
        input.disabled = true;
      } else {
        input.disabled = false;
      }
    }
  };
  const disableEdition = () => {
    const inputs = document.getElementsByTagName("input");
    for (let input of inputs) {
      if (input.id === "Edit") {
        input.disabled = false;
      } else {
        input.disabled = true;
      }
    }
  };
  return (
    <div className="Card">
      <div className="card-left">
        <h2>Senpai's info</h2>
        <div className="card-img">
          <img src={profile} alt="A profile picture" />
        </div>
        <form className="info">
          <div className="labelInput">
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" name="name" disabled />
          </div>
          <div className="labelInput">
            <label htmlFor="email">E-mail: </label>
            <input type="text" id="email" name="email" disabled />
          </div>
          <div className="labelInput">
            <label htmlFor="pass">Password: </label>
            <input
              type="password"
              id="pass"
              name="pass"
              disabled
              value={props.password}
            />
          </div>
          <div className="btns">
            <input
              type="button"
              value="Edit"
              id="Edit"
              name="Edit"
              onClick={enableEdition}
            />
            <input type="submit" value="Save" id="Save" name="Save" disabled />
            {/*
            TODO: ver como hacer que el boton sirva estado disabled en primer lugar
            */}
            <input
              type="button"
              value="Cancel"
              id="Cancel"
              name="Cancel"
              onClick={disableEdition}
            />
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
