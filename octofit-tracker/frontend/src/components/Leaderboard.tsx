import { useEffect, useState } from 'react';
import { fetchArray } from '../utils/api';

type Activity = {
  _id: string;
  user: { name: string } | string;
  caloriesBurned: number;
  durationMinutes: number;
};

type LeaderboardEntry = {
  name: string;
  totalCalories: number;
  totalMinutes: number;
};

export default function Leaderboard() {
  const [leaders, setLeaders] = useState<LeaderboardEntry[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    fetchArray<Activity>('/activities')
      .then((activities) => {
        const scores = activities.reduce<Record<string, LeaderboardEntry>>((acc, activity) => {
          const name = typeof activity.user === 'string' ? activity.user : activity.user.name;
          const entry = acc[name] || { name, totalCalories: 0, totalMinutes: 0 };
          entry.totalCalories += activity.caloriesBurned;
          entry.totalMinutes += activity.durationMinutes;
          acc[name] = entry;
          return acc;
        }, {});

        setLeaders(Object.values(scores).sort((a, b) => b.totalCalories - a.totalCalories));
      })
      .catch(() => setError('Unable to load leaderboard data.'));
  }, []);

  return (
    <div>
      <h2>Leaderboard</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Athlete</th>
              <th>Calories</th>
              <th>Minutes</th>
            </tr>
          </thead>
          <tbody>
            {leaders.map((entry, index) => (
              <tr key={entry.name}>
                <td>{index + 1}</td>
                <td>{entry.name}</td>
                <td>{entry.totalCalories}</td>
                <td>{entry.totalMinutes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
