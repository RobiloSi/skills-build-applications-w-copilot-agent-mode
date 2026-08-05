import { Router } from 'express';
import { healthRouter } from './routes/health';
import { workoutsRouter } from './routes/workouts';

const router = Router();

router.use('/health', healthRouter);
router.use('/workouts', workoutsRouter);

export default router;
