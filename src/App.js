import React from "react";
import "./App.css";
import SideBar from "./views/components/SideBar";
//import AddStreak from "./views/components/Forms/AddStreak"
//import Streaks from "./views/Streaks";
//import Tasks from "./views/Tasks"
import Profile from "./views/Profile"

function App() {
  return (
    <div className="App">
      {/*<Task title="Hacer el taller de compiladores" />   <Tasks /> <Streaks />*/}
      <SideBar />
      <Profile />
    </div>
  );
}

export default App;
