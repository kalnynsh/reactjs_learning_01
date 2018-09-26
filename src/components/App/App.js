import React, { PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';
import { addComment } from '../../actions/commentsActions';
import { addUser } from '../../actions/usersActions';
import createStore from '../../store';


const store = createStore();

store.dispatch(addComment('Hello from Redux!'));

store.dispatch({
  type: 'ERROR_WITH_COMMENT',
  payload: '',
  error: 'Error happen in ADD_COMMENT',
});

store.dispatch(addUser('Artem'));

class App extends PureComponent {
  state = {
    commentBody: '',
  };

  handleCommentInput = event => {
    this.setState({
      commentBody: event.target.value,
    });
  };

  handleKeyDown = event => {
    const { addComment } = this.props;
    const { commentBody } = this.state;

    if (event.keyCode === 13) {
      addComment(commentBody);
      this.setState({
        commentBody: '',
      });
    }
  };

  render() {
    const {
      countComments,
      commentsLast10,
      commentsArray,
      countUsers,
      usersArray
    } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="container">
        <label>
        Enter comments:
        <input
          value={this.state.commentBody}
          onChange={this.handleCommentInput}
          onKeyDown={this.handleKeyDown}/>
        </label>
        <p>We have {countComments} comments</p>
        {commentsLast10 && commentsArray.map(
          (comment, i) => <p key={[comment, i].join('_')}>{comment}</p>)}
        <p>and {countUsers} users</p>
        {usersArray
          && usersArray.map(
            (user, j) => <p key={[user, j].join('_')}>{user}</p>)}
        </div>
      </div>
    );
  }
}

export default App;
