import express from 'express';
import { getRedditContent } from '../controllers/reddit';

const router = express.Router();

router.param('category', (req, res, next, category) => {
  req.category = category;
  console.log('category: ', category);
  next();
});

// http://localhost:8081/api/<top,rising,new,etc.>/.json

// Configure the API router
router.get('/', getRedditContent);
router.get('/:category', getRedditContent);

export default router;
