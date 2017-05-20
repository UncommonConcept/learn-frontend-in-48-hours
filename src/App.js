import React, { Component } from 'react';
import ImageRotator from './ImageRotator';

import logo from './logo.svg';
import './App.css';

const images = [
  'http://lorempixel.com/640/480/city/',
  'http://lorempixel.com/640/480/nature/',
  'http://lorempixel.com/640/480/nightlife/',
  'http://lorempixel.com/640/480/sports/',
];

class App extends Component {
  constructor(props) {
    super(props);

    this.currentImage = images[0];
    this.imageIndex = 0;
  }

  handleClick = () => {
    this.imageIndex++;
    if(this.imageIndex > 2) {
      this.imageIndex = 0;
    }
    this.currentImage = images[this.imageIndex];

    this.forceUpdate();
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
          <button onClick={this.handleClick}>Update image</button>
        </p>
        <div>
          <ImageRotator />
        </div>
      </div>
    );
  }
}

export default App;
