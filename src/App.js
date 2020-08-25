import React from "react";
import "./App.css";
import SideBar from "./views/components/SideBar";
import AddStreak from "./views/components/Forms/AddStreak"
import Streaks from "./views/Streaks";

function App() {
  return (
    <div className="App">
      {/*<Task title="Hacer el taller de compiladores" /> <SideBar /> <AddStreak show={false} /> <Tasks />*/}
      <Streaks />
    </div>
  );
}

export default App;
