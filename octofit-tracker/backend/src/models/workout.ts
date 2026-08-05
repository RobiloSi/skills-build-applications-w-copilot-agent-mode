import mongoose from 'mongoose';

const workoutSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, default: '' },
  durationMinutes: { type: Number, required: true },
  difficulty: { type: String, required: true, enum: ['Beginner', 'Intermediate', 'Advanced'] },
  focusAreas: [{ type: String }],
  createdAt: { type: Date, default: () => new Date() }
});

const Workout = mongoose.model('Workout', workoutSchema);
export default Workout;
