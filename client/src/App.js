import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const { title, content } = this.props;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{title}</h2>
        </div>
        <p className="App-intro">
          {content}
        </p>
        <button className='App-Button' onClick={this.handleButtonClick}>Click me!</button>
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node,
};

App.defaultProps = {
  title: 'I like React!',
  content: <div className='container-div'><p>I am the very model of a modern major general!</p></div>,
};

export default App;
