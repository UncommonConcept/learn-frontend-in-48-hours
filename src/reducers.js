import { State, Effect, Actions } from 'jumpstate';

Effect('downloadPosts', () => {
  return fetch('https://www.reddit.com/top/.json')
    .then(res => res.json())
    .then(body => {
      Actions.savePosts({posts: body.data.children});
    })
});

const subredditPosts = State({
  initial: {
    posts: [],
  },

  savePosts(state, payload) {
    return {
      ...state,
      posts: payload.posts,
    };
  },
});

export default {
  subredditPosts,
};
