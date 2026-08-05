import { Router } from 'express';
import { healthRouter } from './routes/health.js';
import { workoutsRouter } from './routes/workouts.js';
import { usersRouter } from './routes/users.js';
import { activitiesRouter } from './routes/activities.js';
import { teamsRouter } from './routes/teams.js';

const router = Router();

router.use('/health', healthRouter);
router.use('/workouts', workoutsRouter);
router.use('/users', usersRouter);
router.use('/activities', activitiesRouter);
router.use('/teams', teamsRouter);

export default router;
