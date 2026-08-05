import mongoose from 'mongoose';
import User from '../models/user.js';
import Team from '../models/team.js';
import Activity from '../models/activity.js';
import Workout from '../models/workout.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);
    console.log('Connected to octofit_db');

    await User.deleteMany({});
    await Team.deleteMany({});
    await Activity.deleteMany({});
    await Workout.deleteMany({});

    const users = await User.create([
      { name: 'Alex Morgan', email: 'alex@octofit.com', role: 'athlete' },
      { name: 'Jordan Lee', email: 'jordan@octofit.com', role: 'athlete' },
      { name: 'Mia Patel', email: 'mia@octofit.com', role: 'coach' }
    ]);

    const teams = await Team.create([
      { name: 'Ocean Sprint', description: 'High-performance triathlon team', members: [users[0]._id, users[1]._id] },
      { name: 'Peak Pursuit', description: 'Strength and endurance training group', members: [users[2]._id] }
    ]);

    await Activity.create([
      { user: users[0]._id, type: 'Running', durationMinutes: 50, caloriesBurned: 550 },
      { user: users[1]._id, type: 'Cycling', durationMinutes: 70, caloriesBurned: 620 },
      { user: users[0]._id, type: 'Yoga', durationMinutes: 40, caloriesBurned: 200 }
    ]);

    await Workout.create([
      {
        name: 'Endurance Builder',
        description: 'A long-form endurance workout for runners and cyclists.',
        durationMinutes: 60,
        difficulty: 'Intermediate',
        focusAreas: ['Cardio', 'Stamina']
      },
      {
        name: 'Strength Circuit',
        description: 'Full-body strength training with functional movements.',
        durationMinutes: 45,
        difficulty: 'Advanced',
        focusAreas: ['Strength', 'Power']
      },
      {
        name: 'Recovery Flow',
        description: 'Gentle mobility and recovery exercises after intense training.',
        durationMinutes: 30,
        difficulty: 'Beginner',
        focusAreas: ['Flexibility', 'Recovery']
      }
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
