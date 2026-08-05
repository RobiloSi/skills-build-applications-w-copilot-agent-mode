import { Router } from 'express';

export const workoutsRouter = Router();

const sampleWorkouts = [
  { id: '1', name: 'Strength Circuit', duration: 45, difficulty: 'Intermediate' },
  { id: '2', name: 'Cardio Sprint', duration: 30, difficulty: 'Beginner' }
];

workoutsRouter.get('/', (_req, res) => {
  res.json(sampleWorkouts);
});

workoutsRouter.get('/:id', (req, res) => {
  const workout = sampleWorkouts.find((item) => item.id === req.params.id);
  if (!workout) {
    return res.status(404).json({ error: 'Workout not found' });
  }
  res.json(workout);
});
