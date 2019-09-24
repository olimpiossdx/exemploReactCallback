import React from 'react';
import logo from './logo.svg';
import './App.css';
import Callbac from './calbac';

function App() {
  function Change(event: any) {
    console.log('event.target.value', event.target.value);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Exemplo simples usando callback</h3>
        <Callbac change={() => Change} />
      </header>
    </div>
  );
}

export default App;
