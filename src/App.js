import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import View from "./views/View";
//import SideBar from "./views/components/Navigation/SideBar";
//import AddStreak from "./views/components/Forms/AddStreak"
//import Streaks from "./views/Streaks";
//import Tasks from "./views/Tasks"
//import Profile from "./views/Profile";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/*<Task title="Hacer el taller de compiladores" /> <Profile /> <Tasks /> <Streaks />*/}
        <View />
      </div>
    </BrowserRouter>
  );
}

export default App;
