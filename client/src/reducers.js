import { State, Effect, Hook, Actions } from 'jumpstate';
import { LOCATION_CHANGE } from 'react-router-redux';
const API_HOST = `//${window.location.hostname}:8081/api`;

Hook((action) => {
  if(action.type === LOCATION_CHANGE) {
    Actions.clearSearches();
  }
})

Effect('downloadPosts', ({sub, category, before, after}) => {
  let url;
  if(!sub) {
    url = `${API_HOST}/${category || ''}`;
  } else {
    const catUrl = category ? `/${category}` : '';
    url = `${API_HOST}/subreddit/${sub}${catUrl}`;
  }

  if(before) {
    url = `${url}?before=${before}`;
  } else if (after) {
    url = `${url}?after=${after}`;
  }

  return fetch(url)
    .then(res => res.json())
    .then(body => {
      Actions.savePosts({posts: body.data});
    })
});

Effect('searchReddit', (searchTerm) => {
  if(searchTerm) {
    const url = `//${window.location.hostname}:8081/api/search?searchTerm=${searchTerm}`;
    return fetch(url)
      .then(res=>res.json())
      .then(body => {
        Actions.saveSearchResults({results: body.data, searchTerm});
      });
  }
  return Promise.resolve();
});

const subredditPosts = State({
  initial: {
    posts: [],
    searchResults: null,
    searchTerm: null,
  },

  savePosts(state, payload) {
    return {
      ...state,
      posts: payload.posts,
    };
  },

  clearSearches(state, payload) {
    return {
      ...state,
      searchResults: null,
      searchTerm: null,
    };
  },

  saveSearchResults(state, payload) {
    return {
      ...state,
      searchResults: payload.results,
      searchTerm: payload.searchTerm,
    };
  },

});

export default {
  subredditPosts,
};
