import React, { Component } from "react";
import autoBind from "react-autobind";
import "./css/GeneralView.css";

class Reminders extends Component{
    render(){
        document.title = "Tasky chan! | Reminders";
        return <div className="Reminders">
            <h1>Reminders</h1>
        </div>;
    }
}

export default Reminders;