import { State } from 'jumpstate';

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
