import express from 'express';

// Express router
const router = express.Router();

import { adminDashboardController } from '../controllers/admin/adminDashboardController.js';

router.get('/admin/dashboard', adminDashboardController);

export { router };