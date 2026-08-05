import { useEffect, useState } from 'react';
import { fetchArray } from '../utils/api';

type Activity = {
  _id: string;
  type: string;
  durationMinutes: number;
  caloriesBurned: number;
  timestamp: string;
  user: { name: string; email: string } | string;
};

export default function Activities() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    fetchArray<Activity>('/activities')
      .then(setActivities)
      .catch(() => setError('Unable to fetch activity records.'));
  }, []);

  return (
    <div>
      <h2>Activities</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="list-group">
        {activities.map((activity) => (
          <div key={activity._id} className="list-group-item mb-2">
            <div className="d-flex justify-content-between">
              <div>
                <strong>{activity.type}</strong>
                <p className="mb-1">By: {typeof activity.user === 'string' ? activity.user : activity.user.name}</p>
              </div>
              <small>{new Date(activity.timestamp).toLocaleString()}</small>
            </div>
            <div className="text-muted">
              {activity.durationMinutes} min · {activity.caloriesBurned} kcal burned
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
