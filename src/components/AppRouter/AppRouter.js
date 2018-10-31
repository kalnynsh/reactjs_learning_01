import React, { Component } from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import Search from '../Search';
import ShowPage from '../ShowPage';
import './AppRouter.css';
import logo from './logo.svg';

class AppRouter extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React and Redux</h1>
        </header>
        <div className="container">
          <Switch className="switch-nav">
            <Route path="/" component={Search} exect />
            <Route path="/shows/:id" component={ShowPage} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(AppRouter);
