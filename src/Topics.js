import React from 'react';
import { Link, Route } from 'react-router-dom';

const Topic = ({ match, location, history }) => (
  <div>
    <h3>{match.params.topicId}</h3>
    <p>You answered: {(new URLSearchParams(location.search)).get('answer')}</p>
    <button onClick={() => history.push('/')}>Go home!</button>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state?answer=props`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
);

export default Topics;

