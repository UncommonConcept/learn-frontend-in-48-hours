import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from '../Avatar';
import InfoColumn from './InfoColumn';
import RedditCommunityColumn from './RedditCommunityColumn';
import MainContentColumn from './MainContent';
import './Content.css';

const Content = (props) => {
  const { content } = props;
  return (
        <div className="App-intro container-fluid no-padding">
          <div className='App-layout-col-left col-md-3 no-padding'>
            <InfoColumn />
          </div>

          <div className='App-layout-col-content col-md-6'>
            <MainContentColumn>
              {content}
              <Avatar user='gaearon' />
            </MainContentColumn>
          </div>

          <div className='App-layout-col-right col-md-3 no-padding'>
            <RedditCommunityColumn />
          </div>

        </div>
  );
};

Content.propTypes = {
  content: PropTypes.node,
};

Content.defaultProps = {
  content: '',//<div className='container-div'><span>I am the very model of a modern major general!</span></div>,
};

export default Content;
