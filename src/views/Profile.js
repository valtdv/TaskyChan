import React, { Component } from "react";
import "./css/GeneralView.css"
import "./css/Profile.css"
import Card from "./components/Card"

class Profile extends Component {
  render() {
    return (
      <div className="Profile">
        <h1>Profile</h1>
        <Card password="hola"></Card>
      </div>
    );
  }
}

export default Profile;
