import React from 'react';
import { Link, Route } from 'react-router-dom';
import qs from 'query-string';

// const Topic = ({ match, location, history }) => (
//   <div>
//     <h3>{match.params.topicId}</h3>
//     <p>You answered: {(new URLSearchParams(location.search)).get('answer')}</p>
//     <button onClick={() => history.push('/')}>Go home!</button>
//   </div>
// );

class Topic extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      extraContent: null,
    };
  }

  componentDidMount() {
    this.getData(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.getData(nextProps);
  }

  getData = (props) => {
    const { match, location, history } = props;
    const parsed = qs.parse(location.search);
    console.log('Searching reddit for: ', parsed.answer);
    if(parsed.answer) {
      fetch(`https://www.reddit.com/search.json?q=${parsed.answer}`)
        .then(res => res.json())
        .then((body) => {
          this.setState({ extraContent: body })
        })
        .catch((error) => {
          this.setState({ extraContent: error.message });
        });
    }
  }

  render() {
    const { extraContent } = this.state;
    const { match, location, history } = this.props;

    return (
      <div>
        <h3>{match.params.topicId}</h3>
        <p>You answered: {qs.parse(location.search).answer}</p>
        <button onClick={() => history.push('/')}>Go home!</button>
        <p>{JSON.stringify(extraContent)}</p>
      </div>
    );
  }
}

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

