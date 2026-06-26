import express from 'express';
import { sendResponse } from '../utils/response';
import adminRoute from './auth';

const router = express.Router();

// Home route
router.get('/', (req, res) => {
  return sendResponse(res, 200, 'Welcome to the Backend Server');
});

// Routes
router.use('/admin', adminRoute);


export default router;