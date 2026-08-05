import { Router } from 'express';
import Activity from '../models/activity.js';

export const activitiesRouter = Router();

activitiesRouter.get('/', async (_req, res) => {
  const activities = await Activity.find().populate('user', 'name email').lean();
  res.json(activities);
});
