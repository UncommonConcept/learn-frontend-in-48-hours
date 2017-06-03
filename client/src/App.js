import React, { Component } from 'react';
import { Switch } from 'react-router-dom';

import DefaultLayout from './DefaultLayout';
import Content from './Content';
import './App.css';

class App extends Component {
  render() {

    return (
      <div className="App container-fluid">
        <Switch>
          <DefaultLayout path='/' exact         component={Content} />
          <DefaultLayout path='/subreddit/:sub' component={Content} />
          <DefaultLayout path='/:category'      component={Content} />
        </Switch>
      </div>
    );
  }
}

export default App;
