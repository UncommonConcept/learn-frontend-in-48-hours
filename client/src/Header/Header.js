import React from 'react';
import PropTypes from 'prop-types';
import HeaderMenu from './HeaderMenu';
import HeaderBanner from './HeaderBanner';
import RedditMenu from './RedditMenu';

const Header = (props) => {
  const { bannerImage, match } = props;

  return <div className="App-header">
           <HeaderMenu />
           <HeaderBanner bannerImage={bannerImage}
                         subreddit={match.params.sub} />
           <RedditMenu {...props} />
         </div>
}

Header.propTypes = {
  match: PropTypes.object.isRequired,
  bannerImage: PropTypes.string.isRequired,
};

Header.defaultProps = {
  bannerImage: 'http://placehold.it/1280x200',
};

export default Header;