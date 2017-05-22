import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const HeaderBanner = (props) => {
  const { subreddit, bannerImage } = props;
  const bannerLink = subreddit ? `/subreddit/${subreddit}` : '/';

  return (
    <div className='relative'>
      <img src={bannerImage} className="App-logo" alt="avatar" />
      <Link className='App-header-title' to={bannerLink}><h2>{subreddit || 'reddit'}</h2></Link>
    </div>
  );
}

HeaderBanner.propTypes = {
  bannerImage: PropTypes.string.isRequired,
  subreddit: PropTypes.string,
};

export default HeaderBanner;
