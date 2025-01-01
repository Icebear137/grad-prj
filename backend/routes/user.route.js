import express from 'express';
import { protectRoute } from '../middleware/auth.middleware.js';
import { getProfile, updateProfile } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/profile', protectRoute, getProfile);
router.put('/profile', protectRoute, updateProfile);

export default router;
