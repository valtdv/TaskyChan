import React, { useState } from "react";
import "../AddForm.css";

const AddStreak = (props) => {
  const [formData, updateFormData] = useState({
    data: {
      name: "",
      type: "",
    },
  });

  const submitHandler = (event) => {
    event.preventDefault();
    //TODO
    // ... get data form
    // ... submit to API or something
  };

  const handleInputChange = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
    //updateFormData(...formData, [event.target.name] = event.target.value);
  };

  if (props.show === false) {
    return (
      <div className="background display-none">
        <form className="AddStreak" onSubmit={submitHandler}>
          <h3>Create a new streak</h3>
          <div className="labelInput">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              placeholder="Ex: Train my AI to become stronger"
              onKeyPress={handleInputChange}
            />
          </div>
          <p>Do you want to start a new habit or stop an old one?</p>
          <div className="labelCheck">
            <input type="radio" id="radioStart" name="streak" value="Start" />
            <label id="labelStart" htmlFor="radioStart">
              Start this habit
            </label>
          </div>
          <div className="labelCheck">
            <input type="radio" id="radioStop" name="streak" value="Stop" />
            <label id="labelStop" htmlFor="radioStop">
              Stop this habit
            </label>
          </div>
          <div className="SaveCancelBtns">
            <input type="submit" value="Save" />
            <input onClick={props.close} type="button" value="Cancel" />
          </div>
        </form>
      </div>
    );
  }
  return (
    <div className="background">
      <form className="AddStreak">
        <h3>Create a new streak</h3>
        <div className="labelInput">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            placeholder="Ex: Train my AI to become stronger"
          />
        </div>
        <p>Do you want to start a new habit or stop an old one?</p>
        <div className="labelCheck">
          <input type="radio" id="radioStart" name="streak" />
          <label id="labelStart" htmlFor="radioStart">
            Start this habit
          </label>
        </div>
        <div className="labelCheck">
          <input type="radio" id="radioStop" name="streak" />
          <label id="labelStop" htmlFor="radioStop">
            Stop this habit
          </label>
        </div>
        <div className="SaveCancelBtns">
          <input type="submit" value="Save" />
          <input onClick={props.close} type="button" value="Cancel" />
        </div>
      </form>
    </div>
  );
};

export default AddStreak;
