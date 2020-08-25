import React, { Component } from "react";
import "../Layouts.css";

const Task = (props) => {
  return (
    <form className="Task">
      <div className="top-task">
        <div className="Title">
          <input type="checkbox" name="finishedTask" />
          <label>{props.title}</label>
        </div>
        <div className="Btns">
          <button>
            <i class="fas fa-edit"></i>
          </button>
          <button>
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
