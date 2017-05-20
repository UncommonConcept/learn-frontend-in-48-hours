import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './RedditMenu.css';

class RedditMenu extends Component {
  render() {
    const { currentRedditTitle } = this.props;

    return (
      <div className='Reddit-Menu'>
        <div className='Reddit-Menu-Dropdown col-md-3'>
          <span className='Reddit-Menu-Dropdown-text'>/r/{currentRedditTitle}</span>
        </div>

        <div className='Reddit-Menu-Categories col-md-9'>
          <span className='Reddit-Menu-Category-Item'>Hot</span>
          <span className='Reddit-Menu-Category-Item'>New</span>
          <span className='Reddit-Menu-Category-Item'>Rising</span>
          <span className='Reddit-Menu-Category-Item'>Controversial</span>
          <span className='Reddit-Menu-Category-Item'>Top</span>
        </div>
      </div>
    );
  }
}

RedditMenu.propTypes = {
  currentRedditTitle: PropTypes.string.isRequired,
};

RedditMenu.defaultProps = {
  currentRedditTitle: 'birdsForScale',
};

export default RedditMenu;
