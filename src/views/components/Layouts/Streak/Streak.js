import React, { Component } from "react";
import "../Layouts.css";
import "./Progress.css";

class Streak extends Component {
  render() {
    return (
      <div className="Streak">
        <div className="top-streak">
          <div className="Title">
            <label>{this.props.title}</label>
          </div>
          <div className="Btns">
            <button>
              <i className="fas fa-edit"></i>
            </button>
            <button>
              <i className="far fa-trash-alt"></i>
            </button>
          </div>
        </div>
        <hr />
        <div className="bottom-streak">
          <p>User, you've been {this.props.days} day/s without doing this habit</p>
          <Progress />
        </div>
      </div>
    );
  }
}

const Progress = () => {
  return (
    <ol className="progress-bar">
      <li className="is-active">
        <span>1 Day</span>
      </li>
      <li>
        <span>1 Week</span>
      </li>
      <li>
        <span>2 Weeks</span>
      </li>
      <li>
        <span>1 Month</span>
      </li>
      <li>
        <span>6 Months</span>
      </li>
      <li>
        <span>1 Year</span>
      </li>
    </ol>
  );
};

export default Streak;
