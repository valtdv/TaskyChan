import React from "react";
import "./App.css";
import SideBar from "./views/components/SideBar";
import Streak from "./views/components/Layouts/Streak";
//import Tasks from "./views/Tasks";

function App() {
  return (
    <div className="App">
      {/*<Task title="Hacer el taller de compiladores" /> <SideBar />  <Tasks />*/}
      <Streak title="Dejar de comerme las uñas" />
    </div>
  );
}

export default App;
