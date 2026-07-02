import { FaBullhorn } from "react-icons/fa";

function AnnouncementCard({ announcements }) {

    return (

        <div className="dashboard-card">

            <div className="card-header">
                <FaBullhorn />
                <h3>Latest Announcements</h3>
            </div>

            {announcements.length === 0 ? (

                <p>No announcements.</p>

            ) : (

                announcements.slice(0, 3).map(a => (

                    <div
                        key={a.id}
                        className="announcement-item"
                    >

                        <strong>{a.title}</strong>

                        <p>{a.message}</p>

                    </div>

                ))

            )}

        </div>

    );

}

export default AnnouncementCard;