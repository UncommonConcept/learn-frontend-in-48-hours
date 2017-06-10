import React from 'react';
import { Actions } from 'jumpstate';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import qs from 'query-string';

import PostEntry from './PostEntry';

class MainContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sub: null,
      category: null,
      before: null,
      after: null,
    }
  }

  componentDidMount() {
    this.initialize(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.initialize(nextProps);
  }

  initialize = (props) => {
    const { sub: currSub, category: currCategory, after: currAfter, before: currBefore } = this.state;
    const { location, match: { params: { sub, category} }} = props;
    console.log('MC loc: ', location);

    const pagination = { before: null, after: null };
    if(location.search) {
      const parsed = qs.parse(location.search);
      pagination.before = parsed.before || null;
      pagination.after = parsed.after || null;
    }

    if(currSub !== sub || currCategory !== category
       || currBefore !== pagination.before || currAfter !== pagination.after) {
      this.setState({ sub, category, before: pagination.before, after: pagination.after }, () => {
        console.log(sub, category, pagination);
        Actions.downloadPosts({sub, category, ...pagination});
      })
    }
  }

  renderPosts = (posts) => {
    return posts.map(post => {
      const { data } = post;
      return <PostEntry key={data.id} post={data} />;
    });
  }

  renderPagination = (match, resultData) => {
    if(!resultData || !resultData.after) return null;

    return (
      <div className='Pagination-container'>
        {resultData.before ?
          <div className='Pagination-link back'>
            <Link to={`${match.url}?before=${resultData.before}`}>&lt;&lt; Previous Page</Link>
          </div> : null}

        {resultData.after ?
          <div className='Pagination-link forward'>
            <Link to={`${match.url}?after=${resultData.after}`}>Next Page&gt;&gt;</Link>
          </div> : null}
      </div>
    )
  }

  render() {
    const { match, posts, searchResults, searchTerm } = this.props;
    const { sub } = this.state;

    // {resultData.before ? <span>The previous page starts before `{resultData.before}`<br /></span> : ''}
    // {resultData.after ? <span>The next page starts after `{resultData.after}`<br /></span> : ''}
    // <br />
    // The current path is: {match.url}<br />
    // Match params are: {JSON.stringify(match.params)}<br />
    // {searchResults ? <span>We have search results!<br /></span> : null}
    // {match.params.sub ? <span>Render subreddit content for sub `{match.params.sub}` here<br /></span>
    //                   : <span>I will render the homepage<br /></span>}
    // {match.params.category ? <span>Render that content for category: `{match.params.category}`<br /></span> : ''}

    const resultData = (!searchResults ? posts : searchResults) || {};

    return (
      <div>
        <h3>{!searchResults ? `Subreddit: ${sub}` : 'Search results for: ' + searchTerm}</h3>
        {this.renderPosts(resultData.children || [])}
        {this.renderPagination(match, resultData)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.subredditPosts.posts,
    searchResults: state.subredditPosts.searchResults,
    searchTerm: state.subredditPosts.searchTerm,
  };
};

export default connect(mapStateToProps)(MainContent);
