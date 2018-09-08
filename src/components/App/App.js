import React, { Component } from 'react';
import CardNumberHolder from '../CardNumberHolder';
import ModalButton from '../ModalButton';
import Switcher from "../Switcher";
import VideoPlayer from '../VideoPlayer';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {};

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="container">
          <Switcher>
            <VideoPlayer />
            <CardNumberHolder />
            <ModalButton />
          </Switcher>
        </div>
      </div>
    );
  }
}

export default App;
