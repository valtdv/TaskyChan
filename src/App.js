import React from 'react';
import './App.css';
import SideBar from './views/components/SideBar';
import AddForm from './views/components/AddForm';
import AddButton from './views/components/AddButton'

function App() {
  return (
    <div className='App'>
      <SideBar />
      <AddForm />
      {/*<AddButton />*/}
    </div>
  );
}

export default App;
