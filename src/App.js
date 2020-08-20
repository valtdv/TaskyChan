import React from 'react';
import './App.css';
import SideBar from './views/components/SideBar'
import Task from './views/components/Task'

function App() {
  return (
    <div className='App'>
      {/*<SideBar />*/}
      <Task title="Hacer el taller de compiladores" />
    </div>
  );
}

export default App;
