import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import { Header } from './Header';
import RedditMenu from './RedditMenu';
import { Content } from './Content';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    // const { content } = this.props;

    return (
      <div className="App container-fluid">
        <Header />

        <Route path='/' component={RedditMenu} />
        <Route path='/' component={Content} />
        {/*<Route path='/subreddit/:sub' component={} />*/}
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  content: PropTypes.node,
};

App.defaultProps = {
  content: <div className='container-div'><span>I am the very model of a modern major general!</span></div>,
};

export default App;
