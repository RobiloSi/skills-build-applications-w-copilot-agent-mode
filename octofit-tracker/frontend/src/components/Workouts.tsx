import { useEffect, useState } from 'react';
import { getApiBaseUrl } from '../utils/api';

type Workout = {
  _id?: string;
  name: string;
  description: string;
  durationMinutes: number;
  difficulty: string;
  focusAreas?: string[];
};

export default function Workouts() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    fetch(`${getApiBaseUrl()}/workouts`)
      .then((response) => response.json())
      .then(setWorkouts)
      .catch(() => setError('Unable to fetch workouts.'));
  }, []);

  return (
    <div>
      <h2>Workouts</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="row">
        {workouts.map((workout) => (
          <div className="col-md-6" key={workout._id ?? workout.name}>
            <div className="card mb-3 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{workout.name}</h5>
                <p className="card-text">{workout.description}</p>
                <p className="mb-1">
                  <strong>Duration:</strong> {workout.durationMinutes} min
                </p>
                <p className="mb-1">
                  <strong>Difficulty:</strong> {workout.difficulty}
                </p>
                {workout.focusAreas?.length ? (
                  <p className="mb-0">
                    <strong>Focus:</strong> {workout.focusAreas.join(', ')}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
