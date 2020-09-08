import React, { Component } from "react";
import autoBind from "react-autobind";
import "./css/GeneralView.css";

class Advices extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }
  render() {
    document.title = "Tasky chan! | Advices";
    return (
      <div className="Advices">
        <h1>Advices</h1>
      </div>
    );
  }
}

export default Advices;
