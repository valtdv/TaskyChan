import React, { Component } from "react";
import { Route } from "react-router-dom";
import LandingPage from "./user-views/LandingPage";
import Register from "./user-views/Register";
import Login from "./user-views/Login";
/*
import Home from "./user-views/Home"
import Activities from "./user-views/Activities"
import Tasks from "./user-views/Tasks"
import Advices from "./user-views/Advices"
import Reminders from "./user-views/Reminders"
import Streaks from "./user-views/Streaks"
import Profile from "./user-views/Profile"
import SideBar from "./components/Navigation/SideBar";
*/

class View extends Component {
  render() {
    //TODO: if (login) muestra lo de abajo, else muestra la landing page cuando ingrese a la
    //pagina
    /*
    return (
      <div>
        <SideBar />
        <Route path="/" exact component={Home} />
        <Route path="/tasks" exact component={Tasks} />
        <Route path="/activities" exact component={Activities} />
        <Route path="/advices" exact component={Advices} />
        <Route path="/reminders" exact component={Reminders} />
        <Route path="/streaks" exact component={Streaks} />
        <Route path="/profile" exact component={Profile} />
      </div>
    );
    */
    return (
      <div>
        <Route path="/" exact component={LandingPage} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
      </div>
    );
  }
}

export default View;
