import express from 'express';
import { Reddit } from '../controllers/reddit';

const router = express.Router();

// Set up the category parameter for this route
router.param('sub', (req, res, next, sub) => {
  req.reddit = new Reddit(sub);
  next();
});

router.param('category', (req, res, next, category) => {
  req.category = category;
  next();
});

// GET reddit index
router.get('/:sub', (req, res) => req.reddit.getRedditContent(req, res));
router.get('/:sub/:category', (req, res) => req.reddit.getRedditContent(req, res));

export default router;
