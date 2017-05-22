import React from 'react';

const InfoColumn = (props) => {
  return (
    <div className='Content-Info-Column'>
      Info about Reddit
    </div>
  );
}

const MainContentColumn = (props) => {
  return (
    <div className='Content-Main-Column'>
      {props.children}
    </div>
  );
}

const RedditCommunityColumn = (props) => {
  return (
    <div className='Content-Community-Column'>
      Community info
    </div>
  );
}

export {
  InfoColumn,
  MainContentColumn,
  RedditCommunityColumn,
};
