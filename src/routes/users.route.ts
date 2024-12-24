import {
  loginController,
  signupController,
} from '../controllers/users.controller';
import express from 'express';

const router = express.Router();

router.post('/login', loginController);
router.post('/signup', signupController);

export default router;
