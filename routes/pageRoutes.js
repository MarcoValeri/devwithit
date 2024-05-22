import express from 'express';

// Express router
const router = express.Router();

// Controllers
import { homePageController } from '../controllers/pageController.js';

// Set the routers
router.get('/', homePageController);

export { router };