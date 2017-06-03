import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Actions } from 'jumpstate';
import path from 'path';
import './RedditMenu.css';

const categories = [
  { url: '/hot', title: 'Hot' },
  { url: '/new', title: 'New' },
  { url: '/rising', title: 'Rising' },
  { url: '/controversial', title: 'Controversial' },
  { url: '/top', title: 'Top' },
];

class RedditMenu extends Component {
  constructor(props) {
    super(props);

    console.log('RedditMenu constructed');
  }

  handleClick = (event) => {
    event.stopPropagation();
    event.preventDefault();
    const search = this.searchInput.value;
    if(search) {
      Actions.searchReddit(search);
    }
  }

  captureInput = (ref) => {
    this.searchInput = ref;
  }

  render() {
    const { match } = this.props;
    console.log('RedditMenu match is: ', match);

    return (
      <div className='Reddit-Menu'>
        <div className='Reddit-Menu-Dropdown col-md-3'>
          <span className='Reddit-Menu-Dropdown-text'>/r/{match.params.sub || ''}</span>
        </div>

        <div className='Reddit-Menu-Categories col-md-6'>
          {categories.map((cat) => {
            const link = match.params.sub ? path.join(match.url, cat.url) : cat.url;

            return <NavLink key={link}
                            className='Reddit-Menu-Category-Item'
                            activeClassName='active'
                            to={link}>
                     {cat.title}
                   </NavLink>
          })}
        </div>

        <div className='Reddit-Menu-Searchbox col-md-3 no-padding'>
          <div className='Searchbox-Container'>
            <form>
              <input type="text" ref={this.captureInput} placeholder='Search Reddit' />
              <button type="submit" onClick={this.handleClick}>Search!</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

RedditMenu.propTypes = {
  match: PropTypes.object.isRequired,
};

export default RedditMenu;
