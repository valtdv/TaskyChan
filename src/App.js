import React from 'react';
import './App.css';
import SideBar from './views/components/SideBar'
import AddButton from './views/components/Buttons/AddButton'

function App() {
  return (
    <div className='App'>
      {/*<Task title="Hacer el taller de compiladores" />*/}
      <SideBar />
      <AddButton />
    </div>
  );
}

export default App;
