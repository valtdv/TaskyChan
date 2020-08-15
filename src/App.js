import React from 'react';
import './App.css';
import SideBar from './views/components/SideBar';
import LogForm from './views/components/Forms/LogForm';
//import AddButton from './views/components/AddButton'

function App() {
  return (
    <div className='App'>
      <SideBar />
      <LogForm />
      {/*<AddButton />*/}
    </div>
  );
}

export default App;
