import React from 'react'
import logo from './logo.svg';
import './App.css'

import Saludar from './Components/Saludo'

function App() {
  
  const user = {
    name: "Alfredo",
    edad: 22
  }

  const saludarFn = (name) => {
    console.log(`Hola ${name}`);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludar user={user} saludarFn={saludarFn}/>
      </header>
    </div>
  );
}

export default App;
