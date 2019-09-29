import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Callbac from './callback/calback';

function App() {
  const [texto, setTexto] = useState('');

  function Change(event: React.ChangeEvent<HTMLInputElement>) {
    setTexto(event.target.value);
    console.log('event.target.value', event.target.value);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Exemplo simples usando callback</h3>
        <Callbac change={() => Change} />
        <p> seu texto => {texto}</p>
      </header>
    </div>
  );
}

export default App;
