import { Router } from 'express';
import { healthRouter } from './routes/health.js';
import { workoutsRouter } from './routes/workouts.js';
import { usersRouter } from './routes/users.js';
import { activitiesRouter } from './routes/activities.js';

const router = Router();

router.use('/health', healthRouter);
router.use('/workouts', workoutsRouter);
router.use('/users', usersRouter);
router.use('/activities', activitiesRouter);

export default router;
