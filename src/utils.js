import fetch from 'isomorphic-fetch';

const REDDIT_HOST = 'https://www.reddit.com';

export function getRedditContent(subreddit, category) {
  const resourcePath = getRedditPath(subreddit, category);
  console.log('Fetching ', resourcePath);
  return fetch(resourcePath).then(r => r.json());
}

export function getRedditPath(subreddit, category) {
  const rPath = subreddit ? `/r/${subreddit}` : '';
  const rFullPath = rPath ? `${rPath}${category ? `/${category}` : ''}` : '';
  return `${REDDIT_HOST}${rFullPath}/.json`;
}
