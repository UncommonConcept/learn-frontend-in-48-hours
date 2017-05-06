import fetch from 'isomorphic-fetch';

const REDDIT_HOST = 'https://www.reddit.com/';

export function getRedditContent(subreddit = '', category = '') {
  const resourcePath = getRedditPath(subreddit, category);
  console.log('Getting ', resourcePath);
  return fetch(resourcePath)
          .then(resp => {
            if(resp.status < 200 || resp.status >= 400) {
              throw new Error('Request failed: ' + resp.status + ' ' + resp.statusText);
            }
            return resp;
          })
          .then(r => r.json());
}

export function getRedditPath(subreddit, category) {
  const rPath = subreddit ? `/r/${subreddit}` : '';
  const catPath = category ? `/${category}` : '';
  return `${REDDIT_HOST}${rPath}${catPath}/.json`;
}
