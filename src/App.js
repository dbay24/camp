import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Camp</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
            <li>Machete</li>
            <li>Axe</li>
            <li>Canteen</li>
            <li>Matches</li>
        </ul>
      </div>
    );
  }
}

export default App;
