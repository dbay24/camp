import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import './css/index.css';

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
        <ul className="survival-kit">
            <li className="kit-item">Machete</li>
            <li className="kit-item">Axe</li>
            <li className="kit-item">Canteen</li>
            <li className="kit-item">Matches</li>
            <li className="kit-item">First Aid Kit</li>
        </ul>
      </div>
    );
  }
}

export default App;
