import React, { PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from '../Todo';

let id = 0;

function getTodoId() {
  return ++id;
}

class App extends PureComponent {

  state = {
      inputValue: '',
      todos: [
        {
          id: 0,
          value: 'Go shopping',
          done: true
        }
      ]
    }

  handleChange = event => {
    const value = event.target.value;
    this.setState({inputValue: value});
  };

  handleKeyDown = event => {
    if (event.keyCode === 13) {
      const {inputValue, todos} = this.state;
      const newTodo = {value: inputValue, done: false, id: getTodoId()};

      this.setState({inputValue: '', todos: [...todos, newTodo]});
    }
  };

  handleClickCheckbox = id => {
    this.setState(state => ({
      todos: state.todos.map(
        todo => (id === todo.id ? {...todo, done: !todo.done} : todo)
      )
    }));
  };

  handleDelete = id => {
    this.setState(state => ({
      todos: state.todos.filter(todo => id !== todo.id)
    }));
  };

  render() {
    const {inputValue, todos} = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="container">
          <input type="text"
            value={inputValue}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
            className="input"
          />
          <div>
            {
              todos.map(todo => (
                <Todo
                  onChange={this.handleClickCheckbox}
                  onDelete={this.handleDelete}
                  key={todo.id}
                  id={todo.id}
                  text={todo.value}
                  done={todo.done}
                />
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
