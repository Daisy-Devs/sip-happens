import express from 'express';
import { sendResponse } from '../utils/response';
import adminRoute from './auth';
import categoryRoute from './categories';
import productRoute from './products';

const router = express.Router();

// Home route
router.get('/', (req, res) => {
  return sendResponse(res, 200, 'Welcome to the Backend Server');
});

// Routes
router.use('/admin', adminRoute);
router.use('/category', categoryRoute);
router.use('/product', productRoute);

export default router;