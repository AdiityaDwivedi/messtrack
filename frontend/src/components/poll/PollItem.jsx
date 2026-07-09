import {
    FaPoll,
    FaVoteYea,
    FaTrash
} from "react-icons/fa";

function PollItem({
    poll,
    isAdmin,
    onVote,
    onDelete
}) {

    const handleDelete = () => {

        const confirmed = window.confirm(
            "Are you sure you want to delete this poll?"
        );

        if (!confirmed) return;

        onDelete(poll);

    };

    return (

        <div className="poll-card">

            <div className="poll-header">

                <div className="poll-title">

                    <div className="poll-icon">
                        <FaPoll />
                    </div>

                    <div>

                        <h2>{poll.question}</h2>

                        <p className="poll-expiry">
                            Ends on {poll.expiryDate}
                        </p>

                    </div>

                </div>

            </div>

            <div className="poll-options">

                <button
                    className="poll-option"
                    onClick={() => onVote(poll.id, 1)}
                >
                    {poll.option1}
                </button>

                <button
                    className="poll-option"
                    onClick={() => onVote(poll.id, 2)}
                >
                    {poll.option2}
                </button>

                <button
                    className="poll-option"
                    onClick={() => onVote(poll.id, 3)}
                >
                    {poll.option3}
                </button>

            </div>

            {isAdmin && (

                <div className="poll-actions">

                    <button
                        className="delete-btn"
                        onClick={handleDelete}
                    >
                        <FaTrash />
                        Delete
                    </button>

                </div>

            )}

        </div>

    );

}

export default PollItem;