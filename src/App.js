import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import View from "./views/View";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <View />
      </div>
    </BrowserRouter>
  );
}

export default App;
