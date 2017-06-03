import { State, Effect, Actions } from 'jumpstate';

Effect('downloadPosts', () => {
  return fetch('http://reddit.com/top/.json')
    .then(res => res.json())
    .then(body => {
      Actions.savePosts(body.data.children);
    })
});

Effect('searchReddit', (searchTerm) => {
  if(searchTerm) {
    const url = `//${window.location.hostname}:8081/api/search?searchTerm=${searchTerm}`;
    return fetch(url)
      .then(res=>res.json())
      .then(body => {
        Actions.saveSearchResults({results: body, searchTerm});
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
