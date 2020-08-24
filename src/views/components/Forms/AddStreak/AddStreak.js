import React, { Component } from "react";
import "../AddForm.css";

class AddStreak extends Component {
  checkedBox() {
    let start = document.getElementById("checkStart");
    let stop = document.getElementById("checkStop");
    let startLabel = document.getElementById("labelStart");
    let stopLabel = document.getElementById("labelStop");
    if (start.checked === true) {
      stopLabel.classList.add("disabled");
      stop.disabled = true;
    } else if (stop.checked === true) {
      startLabel.classList.add("disabled");
      start.disabled = true;
    } else {
      start.disabled = false;
      stop.disabled = false;
      startLabel.classList.remove("disabled");
      stopLabel.classList.remove("disabled");
    }
  }

  render() {
    return (
      <form className="AddStreak">
        <h3>Create a new streak</h3>
        <div className="labelInput">
          <label for="name">Name: </label>
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
            onChange={this.checkedBox}
          />
          <label id="labelStart" for="checkStart">
            Start this habit
          </label>
        </div>
        <div className="labelCheck">
          <input
            type="checkbox"
            id="checkStop"
            name="checkStop"
            onChange={this.checkedBox}
          />
          <label id="labelStop" for="checkStop">
            Stop this habit
          </label>
        </div>
        <div className="SaveCancelBtns">
          <input type="submit" value="Save" />
          <input type="button" value="Cancel" />
        </div>
      </form>
    );
  }
}

export default AddStreak;
