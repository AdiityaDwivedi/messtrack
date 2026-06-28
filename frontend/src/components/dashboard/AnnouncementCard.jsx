import { FaBullhorn } from "react-icons/fa";

function AnnouncementCard() {
  return (
    <div className="dashboard-card">

      <div className="card-header">
        <FaBullhorn />
        <h3>Latest Announcement</h3>
      </div>

      <p>
        Tomorrow's dinner will be served from 7:30 PM due to maintenance.
      </p>

    </div>
  );
}

export default AnnouncementCard;