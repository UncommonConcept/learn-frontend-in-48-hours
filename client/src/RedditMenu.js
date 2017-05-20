import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './RedditMenu.css';

class RedditMenu extends Component {
  render() {
    const { match } = this.props;
    console.log('Match is: ', match);

    return (
      <div className='Reddit-Menu'>
        <div className='Reddit-Menu-Dropdown col-md-3'>
          <span className='Reddit-Menu-Dropdown-text'>/r/{match.params.category || ''}</span>
        </div>

        <div className='Reddit-Menu-Categories col-md-9'>
          <Link className='Reddit-Menu-Category-Item' to={`${match.url}hot`}>Hot</Link>
          <Link className='Reddit-Menu-Category-Item' to={`${match.url}new`}>New</Link>
          <Link className='Reddit-Menu-Category-Item' to={`${match.url}rising`}>Rising</Link>
          <Link className='Reddit-Menu-Category-Item' to={`${match.url}controversial`}>Controversial</Link>
          <Link className='Reddit-Menu-Category-Item' to={`${match.url}top`}>Top</Link>
        </div>
      </div>
    );
  }
}

RedditMenu.propTypes = {
  currentRedditTitle: PropTypes.string.isRequired,
};

RedditMenu.defaultProps = {
  currentRedditTitle: '',
};

export default RedditMenu;
