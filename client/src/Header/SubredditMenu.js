import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './SubredditMenu.scss';

const formatSubText = (subreddit) => {
  return subreddit ? `/r/${subreddit}` : 'Choose a subreddit';
}

class SubredditMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDropdown: false,
    };
  }

  hoverMenu = () => {
    // this.setState({showDropdown: true});
  }

  hideMenu = () => {
    this.setState({showDropdown: false});
  }

  toggleMenu = () => {
    this.setState({showDropdown: !this.state.showDropdown});
  }

  getHandler = (subreddit) => {
    return (event) => this.handleMenuItemClick(event, subreddit);
  }

  handleMenuItemClick = (event, subreddit) => {
    this.setState({showDropdown: false});
  }

  render() {
    const { subreddit, subredditList } = this.props;
    const { showDropdown } = this.state;

    const display = formatSubText(subreddit);
    const menuClassName = 'Subreddit-menu-items-container' + (showDropdown ? ' active' : '');

    return (
      <div className='Subreddit-menu-container'>
        <div className='btn-group dropdown'>
          <button type='button' className='btn btn-primary Subreddit-menu-button'
                  onMouseEnter={this.hoverMenu} onMouseLeave={this.hideMenu} onClick={this.toggleMenu}>
            <span className='Subreddit-menu-text pull-left'>{display}</span>
            <span className='caret'></span>
            <div className={menuClassName}>
              <ul>
                {subredditList.map(subKey => {
                  return <li key={subKey} onClick={this.getHandler(subKey)}>
                            <Link to={`/subreddit/${subKey}`}>{formatSubText(subKey)}</Link>
                          </li>;
                })}
              </ul>
            </div>
          </button>
        </div>
      </div>
    )
  }
}

SubredditMenu.propTypes = {
  subreddit: PropTypes.string,
  subredditList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

SubredditMenu.defaultProps = {
  subredditList: [],
};

export default SubredditMenu;