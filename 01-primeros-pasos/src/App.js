import React from 'react';
// @ts-ignore
import logo from './logo.svg'
import './App.css';
import Events from './components/Events';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <Events/>
      </header>
    </div>
  );
}

export default App;
