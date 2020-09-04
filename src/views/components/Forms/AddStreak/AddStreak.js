import React, { useState } from "react";
import "../AddForm.css";

const AddStreak = (props) => {
  const [formData, updateFormData] = useState({data: {
    name: "",
    type: ""
  }});

  const submitHandler = (event) => {
    event.preventDefault();
    //TODO
    // ... get data form
    // ... submit to API or something
  };

  const checkedBox = () => {
    let start = document.getElementById("checkStart");
    let stop = document.getElementById("checkStop");
    let startLabel = document.getElementById("labelStart");
    let stopLabel = document.getElementById("labelStop");
    if (start.checked === true) {
      stopLabel.classList.add("disabled");
      stop.disabled = true;
      updateFormData(formData.data.type = "Start");
    } else if (stop.checked === true) {
      startLabel.classList.add("disabled");
      start.disabled = true;
      updateFormData(formData.data.type = "Stop");
    } else {
      start.disabled = stop.disabled = false;
      startLabel.classList.remove("disabled");
      stopLabel.classList.remove("disabled");
    }
    console.log(formData);
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
              onChange={e => updateFormData(formData.data.name = e.target.value)}
            />
          </div>
          <p>Do you want to start a new habit or stop an old one?</p>
          <div className="labelCheck">
            <input
              type="checkbox"
              id="checkStart"
              name="checkStart"
              value="Start"
              onChange={checkedBox}
            />
            <label id="labelStart" htmlFor="checkStart">
              Start this habit
            </label>
          </div>
          <div className="labelCheck">
            <input
              type="checkbox"
              id="checkStop"
              name="checkStop"
              value="Stop"
              onChange={checkedBox}
            />
            <label id="labelStop" htmlFor="checkStop">
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
          <input
            type="checkbox"
            id="checkStart"
            name="checkStart"
            onChange={checkedBox}
          />
          <label id="labelStart" htmlFor="checkStart">
            Start this habit
          </label>
        </div>
        <div className="labelCheck">
          <input
            type="checkbox"
            id="checkStop"
            name="checkStop"
            onChange={checkedBox}
          />
          <label id="labelStop" htmlFor="checkStop">
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
