import React, { PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends PureComponent {

  state = {};

  render() {
    const {inputValue, todos} = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="container">

        </div>
      </div>
    );
  }
}

export default App;
