import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
          <div style={{ marginTop: 64, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span>Agegué algunos cambios</span>
            <label>Daniel</label>
            <form style={{ display: 'flex', flexDirection: 'column' }}>
              <input style={{ marginTop: 8 }} type="text" placehodler="Escribe algo!" />
              <textarea style={{ marginTop: 8 }}>Esta es una prueba</textarea>
            </form>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
