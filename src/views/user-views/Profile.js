import React, { Component } from "react";
import "./css/GeneralView.css"
import Card from "../components/Cards/ProfileCard"

class Profile extends Component {
  render() {
    document.title = "Tasky chan! | Profile";
    return (
      <div className="Profile">
        <h1>Profile</h1>
        <Card />
      </div>
    );
  }
}

export default Profile;
