import { FaPoll } from "react-icons/fa";

function PollCard() {
  return (
    <div className="dashboard-card">

      <div className="card-header">
        <FaPoll />
        <h3>Active Poll</h3>
      </div>

      <p>
        Should we include Ice Cream every Sunday?
      </p>

      <button className="vote-btn">
        Vote Now
      </button>

    </div>
  );
}

export default PollCard;