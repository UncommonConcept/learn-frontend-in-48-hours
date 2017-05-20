import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';
import App from './App';

export default class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={App} />
        </div>
      </BrowserRouter>
    )
  }
}
