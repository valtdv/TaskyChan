import React from "react";
import "./App.css";
import SideBar from "./views/components/SideBar";

import Streaks from "./views/Streaks";

function App() {
  return (
    <div className="App">
      {/*<Task title="Hacer el taller de compiladores" />   <Tasks />*/}
      <SideBar />
      <Streaks />
    </div>
  );
}

export default App;
