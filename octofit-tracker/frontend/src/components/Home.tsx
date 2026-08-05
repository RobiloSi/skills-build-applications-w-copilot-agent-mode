export default function Home() {
  return (
    <div className="container py-5">
      <h1>OctoFit Tracker</h1>
      <p className="lead">
        Modern fitness tracking for teams, workouts, and leaderboards.
      </p>
      <div className="row mt-4">
        <div className="col-lg-4 mb-3">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Teams</h5>
              <p className="card-text">Organize athletes and coaches into competitive groups.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mb-3">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Workouts</h5>
              <p className="card-text">Track and explore workout routines for every ability.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mb-3">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Leaderboard</h5>
              <p className="card-text">Compare team and athlete results with performance metrics.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
