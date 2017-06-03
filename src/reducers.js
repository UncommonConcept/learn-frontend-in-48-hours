import { State } from 'jumpstate';

const subredditPosts = State({
  initialState: {
    posts: [],
  },

  savePosts(state, payload) => {
    return {
      ...state,
      posts: action.payload.posts,
    };
  },
});

export default {
  subredditPosts,
};
