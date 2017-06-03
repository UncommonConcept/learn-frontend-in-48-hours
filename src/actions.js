const savePosts = (posts) => {
  return {
    type: 'SUBREDDIT_POSTS_DOWNLOADED',
    payload: { posts },
  };
};

export {
  savePosts,
};
