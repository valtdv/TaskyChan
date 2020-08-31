import React, { Component } from "react";
import autoBind from "react-autobind";
import "./css/GeneralView.css";

class Activities extends Component{
    render(){
        document.title = "Tasky chan! | Activities";
        return <div className="Activites">
            <h1>Activities</h1>
        </div>;
    }
}

export default Activities;