import React, { Component } from 'react';
import { Actions } from 'jumpstate';
import logo from './logo.svg';
import './App.css';

const handleClick = () => {
  const redditPosts = [
    { id: '123', title: 'Post One' }
  ];

  Actions.savePosts({posts: redditPosts});
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <button onClick={handleClick}>Learn some Redux!</button>
        </p>
      </div>
    );
  }
}

export default App;
