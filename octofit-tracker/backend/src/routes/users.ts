import { Router } from 'express';
import User from '../models/user.js';

export const usersRouter = Router();

usersRouter.get('/', async (_req, res) => {
  const users = await User.find().select('name email role team createdAt').lean();
  res.json(users);
});
