import React, { Component } from 'react';
import { Actions } from 'jumpstate';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  handleClick = () => {
    const search = this.input.value;
    Actions.searchReddit(search);
  }

  captureInput = (ref) => {
    this.input = ref;
  }

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
          <input type="text" ref={this.captureInput} />
          <button onClick={this.handleClick}>Learn some Redux!</button>
        </p>
      </div>
    );
  }
}

export default App;
