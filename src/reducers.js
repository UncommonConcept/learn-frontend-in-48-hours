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
      Actions.saveSearchresults({results: body});
    });
});

const subredditPosts = State({
  initialState: {
    posts: [],
  },

  savePosts(state, action) {
    return {
      ...state,
      posts: action.payload.posts,
    };
  },

  saveSearchResults(state, action) {
    return {
      ...state,
      searchResults: action.payload.results,
    };
  },

});

export default {
  subredditPosts,
};
