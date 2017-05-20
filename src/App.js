import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import Topics from './Topics';
import NoMatch from './NoMatch';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/" render={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
          <Route component={NoMatch}/>
        </Switch>
      </div>
    );
  }
}

export default App;
