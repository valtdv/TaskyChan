import React, { Component } from "react";
import "./Task.css";

class Task extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Task">
        <div className="top-task">
          <h2>{this.props.title}</h2>
        </div>
        <hr />
        <div className='bottom-task'>
          <p>
            {this.props.content}
          </p>
        </div>
      </div>
    );
  }
}

export default Task;
