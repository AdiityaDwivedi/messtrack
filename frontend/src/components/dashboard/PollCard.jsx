import { FaPoll } from "react-icons/fa";

function PollCard({ poll }) {

    return (

        <div className="dashboard-card">

            <div className="card-header">
                <FaPoll />
                <h3>Active Poll</h3>
            </div>

            {poll ? (

                <>

                    <p>{poll.question}</p>

                    <button className="vote-btn">

                        Vote Now

                    </button>

                </>

            ) : (

                <p>No active poll.</p>

            )}

        </div>

    );

}

export default PollCard;