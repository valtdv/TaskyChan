import React, { Component } from "react";
import "./Container.css";

const Container = () => {
  return <div className="Container">{this.props.children}</div>;
}

export default Container;
