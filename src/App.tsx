import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Callbac from './callback/calback';
import AdicionandoElementos from './useEffect/AdicionandoElementos';

function App() {
  const [texto, setTexto] = useState('');

  const [pessoas, setPessoas] = useState(['pessoa ', 'pessoa 1 ']);
  useEffect(() => {}, [pessoas]);

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
        <h3>Lista de pessoas com useEffect</h3>
        <ul>
          <li>{pessoas}</li>
        </ul>

        <button
          onClick={() => setPessoas([...pessoas, `produto-${pessoas.length} `])}
        >
          Add
        </button>
      </header>
    </div>
  );
}

export default App;
