import React, { Component } from "react";
import "./Container.css";
import Task from "../Task";

class Container extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className="Container">{this.props.children}</div>;
  }
}

export default Container;
