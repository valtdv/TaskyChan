import React from "react";
import "./App.css";
import SideBar from "./views/components/SideBar";
import Tasks from "./views/Tasks";

function App() {
  return (
    <div className="App">
      {/*<Task title="Hacer el taller de compiladores" />*/}
      <SideBar />
      <Tasks />
    </div>
  );
}

export default App;
