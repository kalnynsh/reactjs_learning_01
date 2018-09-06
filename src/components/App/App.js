import React, { PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';
import NewsPost from '../NewsPost';

let newsID = 1;

function getNewsID () {
  newsID++;

  return newsID;
}
class App extends PureComponent {

  state = {
      newsInput: '',
      news: [
          {id: 1, content: 'test'},
      ]
  };

  handleChange = event => {
      const value = event.target.value;
      this.setState({newsInput: value});
  };

  /** Handle key enter keyCode: 13 */
  handleKeyDown = event => {
    if (event.keyCode === 13) {
      const {newsInput, news} = this.state;
      const newNews = {id: getNewsID(), content: newsInput};

      this.setState((state) => ({
        newsInput: '',
        news: [...news, newNews]
      }));
    }
  };

  handleDelete = id => {
    this.setState(state => ({
      news: state.news.filter(newsItem => id !== newsItem.id)
    }));
  }

  render() {
    const {newsInput, news} = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">News</h1>
        </header>
        <div className="container">
          <label>
            Enter news:
            <input type="text" className="news-input"
              onChange={this.handleChange}
              onKeyDown={this.handleKeyDown}
              value={newsInput}
            />
          </label>
          <div>
            {news.map( newsItem => (
              <NewsPost
                key={newsItem.id}
                id={newsItem.id}
                text={newsItem.content}
                onDeleteNews={this.handleDelete}
              />))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
