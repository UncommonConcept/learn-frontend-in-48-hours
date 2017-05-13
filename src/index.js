import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const title = 'Welcome to React';
const content = <span>To get started, edit <code>src/App.js</code> and save to reload.</span>;

ReactDOM.render(
  <App title={title} content={content} />,
  document.getElementById('root')
);
