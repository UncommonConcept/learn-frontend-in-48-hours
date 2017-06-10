import fetch from 'isomorphic-fetch';
import qs from 'query-string';

const REDDIT_HOST = 'https://www.reddit.com';

export function getRedditContent(resourcePath) {
  return fetch(resourcePath).then(r => r.json());
}

export function getRedditPath(subreddit, category, before, after, limit) {
  const params = { limit, before, after };

  const rPath = subreddit ? `/r/${subreddit}` : '';
  const rCategory = category ? `/${category}` : '';
  const rFullPath = rPath ? `${rPath}${rCategory}` : rCategory;
  return `${REDDIT_HOST}${rFullPath}/.json?${qs.stringify(params)}`;
}
