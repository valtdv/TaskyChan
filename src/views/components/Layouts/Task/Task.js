import React from "react";
import "../Layouts.css";

const Task = (props) => {
  return (
    <form className="Task">
      <div className="top-task">
        <div className="Title">
          <input type="checkbox" id="finishedTask" name="finishedTask" onChange={props.onchange} />
          <label htmlFor="finishedTask">{props.title}</label>
        </div>
        <div className="Btns">
          <button onClick={props.edit}>
            <i class="fas fa-edit"></i>
          </button>
          <button onClick={props.delete}>
            <i class="far fa-trash-alt"></i>
          </button>
        </div>
      </div>
      <hr />
      <div className="bottom-task">
        <p>{props.content}</p>
      </div>
    </form>
  );
};

export default Task;
