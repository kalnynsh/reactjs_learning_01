import React, { PureComponent } from 'react';
import { Link, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { AuthorizeProvider } from '../AuthorizeProvider';
import Public from '../Public';
import Private from '../Private';
import Login from '../Login';
import PrivateRoute from '../PrivateRoute';
import Hobbies from '../Hobbies';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const NotFound = () => <p>404 Not Found</p>;

class App extends PureComponent {

  state = {};

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="container">
          <AuthorizeProvider>
            <nav>
              <Link to="/"> Home /</Link>
              <Link to="/private"> Private page /</Link>
              <Link to="/hobbies"> Hobbies /</Link>
              <Link to="/login"> Login </Link>
            </nav>
            <hr />
            <Switch>
              <Route path="/" exact component={Public} />
              <Route path="/hobbies" component={Hobbies} />
              <Route path="/login" component={Login} />
              <PrivateRoute path="/private" component={Private} />
              <Redirect to="/" />
              <Route path="*" component={NotFound} />
            </Switch>
          </AuthorizeProvider>
        </div>
      </div>
    );
  }
}
// Old API
export default withRouter(App);
