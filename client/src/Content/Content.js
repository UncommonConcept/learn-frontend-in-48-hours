import React from 'react';
import { Route } from 'react-router-dom';
import { InfoColumn, MainContentColumn, RedditCommunityColumn } from './Columns';
import MainContent from './MainContent';
import './Content.css';

const Content = (props) => {
  console.log('Content props: ', props);
  const { match, location, history } = props; //eslint-disable-line

  return (
    <div className="App-intro container-fluid no-padding">
      <div className='App-layout-col-left col-md-3 no-padding'>
        <InfoColumn />
      </div>

      <div className='App-layout-col-content col-md-6'>
        <MainContentColumn>
          <Route path={match.path} exact component={MainContent} />
          <Route path={`${match.path}/:category`} component={MainContent} />
        </MainContentColumn>
      </div>

      <div className='App-layout-col-right col-md-3 no-padding'>
        <RedditCommunityColumn />
      </div>
    </div>
  );
};

export default Content;
