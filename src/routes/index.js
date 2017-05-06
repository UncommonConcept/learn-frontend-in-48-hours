import express from 'express';
import home from './home';

const router = express.Router();

// Configure the API router
router.use('/', home);

export default router;
