import React from "react";
import "../AddForm.css";

const AddReminder = (props) => {
  if (props.show === false) {
    return (
      <div className="background display-none">
        <form className="AddReminder">
          <h3>Add Reminder</h3>
          <div className="labelInput">
            <label>Name: </label>
            <input type="text" name="nameR" placeholder="Ex: Change my oil" />
          </div>
          <div className="labelInput">
            <label>Time (12hrs):</label>
            <input type="time" name="hour" placeholder="Ex: 14:45"></input>
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
      <form className="AddReminder">
        <h3>Add Reminder</h3>
        <div className="labelInput">
          <label>Name: </label>
          <input type="text" name="nameR" placeholder="Ex: Change my oil" />
        </div>
        <div className="labelInput">
          <label>Time (12hrs):</label>
          <input type="time" name="hour" placeholder="Ex: 14:45"></input>
        </div>
        <div className="SaveCancelBtns">
          <input type="submit" value="Save" />
          <input onClick={props.close} type="button" value="Cancel" />
        </div>
      </form>
    </div>
  );
};

export default AddReminder;
