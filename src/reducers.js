import { State, Effect, Actions } from 'jumpstate';

Effect('downloadPosts', () => {
  return fetch('http://reddit.com/top/.json')
    .then(res => res.json())
    .then(body => {
      Actions.savePosts(body.data.children);
    })
});

Effect('searchReddit', (searchTerm) => {
  const url = `https://www.reddit.com/search.json?q=${searchTerm}`;
  return fetch(url)
    .then(res=>res.json())
    .then(body => {
      Actions.saveSearchResults({results: body});
    });
});

const subredditPosts = State({
  initial: {
    posts: [],
    searchResults: null,
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
    };
  },

});

export default {
  subredditPosts,
};
