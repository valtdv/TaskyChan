import React, { Component } from "react";
import "./css/GeneralView.css";
import "./components/Forms/AddStreak"
import AddButton from "./components/Buttons/AddButton";
import AddStreak from "./components/Forms/AddStreak";

class Streaks extends React.Component {
  render() {
    return (
      <div className="Streaks">
        <AddStreak />
        <AddButton />
      </div>
    );
  }
}

export default Streaks;
