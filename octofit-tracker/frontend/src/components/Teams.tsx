import { useEffect, useState } from 'react';
import { fetchArray } from '../utils/api';

type Team = {
  _id: string;
  name: string;
  description: string;
  members?: string[];
};

export default function Teams() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    fetchArray<Team>('/teams')
      .then(setTeams)
      .catch(() => setError('Unable to fetch teams.'));
  }, []);

  return (
    <div>
      <h2>Teams</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="row">
        {teams.map((team) => (
          <div className="col-md-6" key={team._id}>
            <div className="card mb-3 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{team.name}</h5>
                <p className="card-text">{team.description}</p>
                <p className="mb-0">
                  <strong>Members:</strong> {team.members?.length ?? 0}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
