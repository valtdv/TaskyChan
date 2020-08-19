import React from 'react';
import './App.css';
import SideBar from './views/components/SideBar'
import Home from "./views/Home"

function App() {
  return (
    <div className='App'>
      <SideBar />
      <Home />
    </div>
  );
}

export default App;
