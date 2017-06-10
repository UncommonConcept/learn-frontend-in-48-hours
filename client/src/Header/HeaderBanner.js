import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class HeaderBanner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addTransition: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ addTransition: true });
    }, 2000);
  }

  render() {
    const { subreddit, bannerImage } = this.props;
    const { addTransition } = this.state;
    const bannerLink = subreddit ? `/subreddit/${subreddit}` : '/';

    const linkClass = 'App-header-title' + (addTransition ? ' transitioned' : '');

    return (
      <div className='relative'>
        <img src={bannerImage} className="App-logo" alt="avatar" />
        <Link className={linkClass} to={bannerLink}><h2>{subreddit || 'reddit'}</h2></Link>
      </div>
    );
  }
}

HeaderBanner.propTypes = {
  bannerImage: PropTypes.string.isRequired,
  subreddit: PropTypes.string,
};

export default HeaderBanner;
