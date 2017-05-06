import express from 'express';
import fetch from 'isomorphic-fetch';
import HttpStatus from 'http-status-codes';

const app = express();
const REDDIT_HOST = 'https://www.reddit.com/';

app.get('/api', function (req, res) {
  getRedditContent('')
    .then((body) => {
      res.status(HttpStatus.OK).json(body);
    })
    .catch(error => {
      console.log(error);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: error });
    });
});

const server = app.listen(8081, function () {
   const host = server.address().address
   const port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
});

function getRedditContent(subreddit, category) {
  const resourcePath = getRedditPath(subreddit, category);
  return fetch(resourcePath).then(r => r.json());
}

function getRedditPath(subreddit, category) {
  const rPath = subreddit ? `r/${subreddit}` : '';
  const rFullPath = rPath ? `${rPath}${category ? `/${category}` : ''}` : '';
  return `${REDDIT_HOST}${rFullPath}/.json`;
}