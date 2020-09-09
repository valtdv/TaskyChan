import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./user-views/Home"
import Activities from "./user-views/Activities"
import Tasks from "./user-views/Tasks"
import Advices from "./user-views/Advices"
import Reminders from "./user-views/Reminders"
import Streaks from "./user-views/Streaks"
import Profile from "./user-views/Profile"
import SideBar from "./components/Navigation/SideBar";


class View extends Component {
  render() {
    //TODO: if (login) muestra lo de abajo, else muestra la landing page cuando ingrese a la
    //pagina
    return (
      <div>
        <SideBar />
        <Route path="/" exact component={Home} />
        <Route path="/Tasks" exact component={Tasks} />
        <Route path="/Activities" exact component={Activities} />
        <Route path="/Advices" exact component={Advices} />
        <Route path="/Reminders" exact component={Reminders} />
        <Route path="/Streaks" exact component={Streaks} />
        <Route path="/Profile" exact component={Profile} />
      </div>
    );
  }
}

export default View;
