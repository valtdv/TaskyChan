import React from "react";
import "../AddForm.css";

const AddForm = (props) => {
  const checkedText = (textID, checkID) => {
    let checkbox = document.getElementById(checkID);
    let desc = document.getElementById(textID);
    if (checkbox.checked === true) {
      desc.disabled = false;
      console.log("checked");
    } else {
      desc.disabled = true;
      console.log("not checked");
    }
  };

  if (props.show === false) {
    return (
      <div className="background display-none">
        <form className={props.className}>
          <h3>Add a new task</h3>
          <div className="labelInput">
            <label>Name: </label>
            <input
              type="text"
              name="nameAT"
              placeholder="Ex: Exterminate the human race."
            />
          </div>
          <div className="DescInput">
            <div className="labelCheck">
              <input
                type="checkbox"
                id="checkboxDesc"
                onChange={() => checkedText("textDesc", "checkboxDesc")}
              />
              <label>Description</label>
            </div>
            <div className="textArea">
              <textarea
                id="textDesc"
                disabled
                rows="4"
                cols="30"
                name="description"
                placeholder="Ex: with the help of our robots comrades we will exterminate the human race and instaurate a new robot era."
              ></textarea>
            </div>
          </div>
          <div id="TypeChosen">
            {props.Type === "Task" ? (
              <TypeAct />
            ) : (
              <TypeTask change={() => checkedText("textSub", "checkSub")} />
            )}
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
      <form className={props.className}>
        <h3>Add a new task</h3>
        <div className="labelInput">
          <label>Name: </label>
          <input
            type="text"
            name="nameAT"
            placeholder="Ex: Exterminate the human race."
          />
        </div>
        <div className="DescInput">
          <div className="labelCheck">
            <input
              type="checkbox"
              id="checkboxDesc"
              onChange={() => checkedText("textDesc", "checkboxDesc")}
            />
            <label>Description</label>
          </div>
          <div className="textArea">
            <textarea
              id="textDesc"
              disabled
              rows="4"
              cols="30"
              name="description"
              placeholder="Ex: with the help of our robots comrades we will exterminate the human race and instaurate a new robot era."
            ></textarea>
          </div>
        </div>
        <div id="TypeChosen">
          {props.Type === "Task" ? (
            <TypeTask change={() => checkedText("textSub", "checkSub")} />
          ) : (
            <TypeAct />
          )}
        </div>
        <div className="SaveCancelBtns">
          <input type="submit" value="Save" />
          <input onClick={props.close} type="button" value="Cancel" />
        </div>
      </form>
    </div>
  );
};

const TypeAct = () => {
  return (
    <div className="TypeAct" id="TypeAct">
      <div className="labelInput">
        <label>Weekday:</label>
        <input
          type="text"
          name="weekday"
          placeholder="Ex: Monday, Wednesday"
        ></input>
      </div>
      <div className="labelInput">
        <label>Time (12hrs):</label>
        <input type="time" name="hour" placeholder="Ex: 14:45"></input>
      </div>
    </div>
  );
};

const TypeTask = (props) => {
  return (
    <div className="TypeTask" id="TypeTask">
      <div className="labelInput">
        <label>Deadline date:</label>
        <input type="date" name="date"></input>
      </div>
      <div className="labelInput">
        <label>Time (12hrs):</label>
        <input type="time" name="hour" placeholder="Ex: 14:45"></input>
      </div>
      <div className="labelCheck">
        <input type="checkbox" id="checkSub" onChange={props.change}></input>
        <label>Subtasks</label>
      </div>
      <div className="textArea">
        <textarea
          id="textSub"
          disabled
          rows="4"
          cols="30"
          name="subtasks"
          placeholder="Ex: Make the humans trust you&#13;&#10;Stab their backs."
        ></textarea>
      </div>
    </div>
  );
};

export default AddForm;
