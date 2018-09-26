import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Market from '../Market';
import Farm from '../Farm';
import Budget from '../Budget';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App_flex_row_start">
          <Market />
          <Farm />
          <Budget />
        </div>
      </div>
    );
  }
}

export default App;
