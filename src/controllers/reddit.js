import HttpStatus from 'http-status-codes';
import { getRedditContent as GRC } from '../utils';

export function getRedditContent(req, res) {
  console.log('req.category: ', req.category);
  GRC('', req.category)
    .then((body) => {
      res.status(HttpStatus.OK).json(body);
    })
    .catch(error => {
      console.log(error);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: error });
    });
}
