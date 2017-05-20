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

  componentDidMount () {
    // Defer creating _debouncedResize until it's mounted
    // This allows users to change DEBOUNCE_TIME if they want
    // If there's no listeners, we need to attach the window listener
    window.addEventListener('resize', this.onResize, false);
  }

  componentWillUnmount () {
    // What happens if I don't call this here?
    window.removeEventListener('resize', this.onResize, false);
  }

  onResize = () => {
    const windowWidth = window.innerWidth ||
                        document.documentElement.clientWidth ||
                        document.body.clientWidth;
    const windowHeight = window.innerHeight ||
                         document.documentElement.clientHeight ||
                         document.body.clientHeight;

    const eventData = {
      window: {
        width: windowWidth,
        height: windowHeight,
      },
    };

    console.log('Window resized! Event data: ', eventData);
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
    // What happens if I use access the state right here?
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
