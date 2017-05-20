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

    this.state = {
      currentImage: images[0],
      imageIndex: 0,
    }
  }

  handleClick = () => {
    let newIndex = this.state.imageIndex + 1;
    let newImage = this.state.currentImage;
    if(newIndex > images.length - 1) { newIndex = 0; }

    // ignore sports
    if(images[newIndex].indexOf('sports') < 0) {
      newImage = images[newIndex];
    } else {
      alert('No way man!');
    }

    this.setState({ currentImage: newImage, imageIndex: newIndex });
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
          <button onClick={this.handleClick}>I'm feeling lucky!</button>
        </p>
        <div>
          <ImageRotator imageSource={this.state.currentImage} />
        </div>
      </div>
    );
  }
}

export default App;
