import HttpStatus from 'http-status-codes';
import { getRedditContent } from '../utils';

export class Reddit {
  reddit = null;

  constructor(reddit) {
    this.reddit = reddit;
  }

  searchReddit = (req, res) => {
    console.log('searchReddit using query: ', req.query);
    const searchTerm = req.query.searchTerm;
    if(!searchTerm) {
      res.status(HttpStatus.NOT_FOUND).json({ error: 'Search term cannot be empty'});
      return;
    }

    const url = `https://www.reddit.com/search.json?q=${searchTerm}`;
    return fetch(url)
      .then(res=>res.json())
      .then(body => {
        res.status(HttpStatus.OK).json(body);
      })
      .catch(error => {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ error });
      });
  }

  getRedditContent = (req, res) => {
    // // Uncomment these and see what this request is actually receiving
    // console.log('====== url ======');
    // console.log(req.url);
    // console.log('====== category ======');
    // console.log(req.category);
    // console.log('====== route ======');
    // console.log(req.route);

    console.log(`Reddit: Getting ${this.reddit}/${req.category ? req.category : ''}`);

    getRedditContent(this.reddit, req.category)
      .then((body) => {
        res.status(HttpStatus.OK).json(body);
      })
      .catch(error => {
        console.log(error);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: error });
      });
  }
}
