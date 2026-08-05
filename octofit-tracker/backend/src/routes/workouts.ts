import { Router } from 'express';

export const workoutsRouter = Router();

const sampleWorkouts = [
  {
    id: '1',
    name: 'Strength Circuit',
    description: 'A full-body strength workout that builds endurance and muscle.',
    duration: 45,
    difficulty: 'Intermediate',
    focusAreas: ['Strength', 'Endurance']
  },
  {
    id: '2',
    name: 'Cardio Sprint',
    description: 'A high-intensity interval training session to boost cardio fitness.',
    duration: 30,
    difficulty: 'Beginner',
    focusAreas: ['Cardio', 'Speed']
  }
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
