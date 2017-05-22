import React from 'react';
import Avatar from '../Avatar';

const MainContent = ({ match, location, history }) => {
  return (
    <div>
      <Avatar user='gaearon' />
      The current path is: {match.url}<br />
      Match params are: {JSON.stringify(match.params)}<br />
      {match.params.sub ? `Render subreddit content for sub '${match.params.sub}' here` : 'I will render the homepage'}<br />
      {match.params.category ? `I will render that content for category: ${match.params.category}` : ''}<br />
    </div>
  );
}

export default MainContent;
