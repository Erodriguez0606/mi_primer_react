import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <label>Etiqueta creada por Lalo</label>
          <input type="Button" value="Presioname" ></input>

          <p>
            Hola Mundo desde mi primer React
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Eduardo
          </a>
        </header>
      </div>
    );
  }
}

export default App;
