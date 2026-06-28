import { Link } from "react-router-dom";

function QuickActionCard() {
  return (
    <div className="dashboard-card">

      <div className="card-header">
        <h3>Quick Actions</h3>
      </div>

      <div className="quick-links">

        <Link to="/menu">View Menu</Link>

        <Link to="/announcements">
          Announcements
        </Link>

        <Link to="/polls">
          Polls
        </Link>

      </div>

    </div>
  );
}

export default QuickActionCard;