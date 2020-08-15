import React from 'react';
import './App.css';
import SideBar from './views/components/SideBar';
import RegForm from './views/components/RegForm';
import AddButton from './views/components/AddButton'

function App() {
  return (
    <div className='App'>
      <SideBar />
      <RegForm />
      {/*<AddButton />*/}
    </div>
  );
}

export default App;
