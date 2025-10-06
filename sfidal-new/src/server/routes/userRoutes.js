import express from 'express';
import { registerUser, authUser } from '../controllers/userController.js'; 

const router = express.Router();

// Rruga: POST /api/users
// Për krijimin e adminit fillestar
router.route('/').post(registerUser);
router.route('/login').post(authUser);

export default router;