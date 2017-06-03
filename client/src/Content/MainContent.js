import React from 'react';
import Avatar from '../Avatar';
import { connect } from 'react-redux';

const MainContent = ({ match, location, history, posts, searchResults }) => {
  return (
    <div>
      <Avatar user='gaearon' />
      The current path is: {match.url}<br />
      Match params are: {JSON.stringify(match.params)}<br />
      {match.params.sub ? `Render subreddit content for sub '${match.params.sub}' here` : 'I will render the homepage'}<br />
      {match.params.category ? `I will render that content for category: ${match.params.category}` : ''}<br />
      <br />
      {!searchResults ? JSON.stringify(posts) : null}
      {searchResults ? JSON.stringify(searchResults) : null}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    posts: state.subredditPosts.posts,
    searchResults: state.subredditPosts.searchResults,
  };
};

export default connect(mapStateToProps)(MainContent);
