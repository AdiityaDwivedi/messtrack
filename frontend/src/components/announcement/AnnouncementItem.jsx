import {
    FaBullhorn,
    FaEdit,
    FaTrash
} from "react-icons/fa";

function AnnouncementItem({
    announcement,
    isAdmin,
    onEdit,
    onDelete
}) {

    const handleDelete = () => {

        const confirmed = window.confirm(
            "Are you sure you want to delete this announcement?"
        );

        if (!confirmed) return;

        onDelete(announcement);

    };

    return (

        <div className="announcement-card">

            <div className="announcement-header">

                <div className="announcement-title">

                    <FaBullhorn className="announcement-icon" />

                    <h2>{announcement.title}</h2>

                </div>

            </div>

            <p className="announcement-message">
                {announcement.message}
            </p>

            {isAdmin && (

                <div className="announcement-actions">

                    <button
                        type="button"
                        className="edit-btn"
                        onClick={() => onEdit(announcement)}
                    >
                        <FaEdit />
                        <span>Edit</span>
                    </button>

                    <button
                        type="button"
                        className="delete-btn"
                        onClick={handleDelete}
                    >
                        <FaTrash />
                        <span>Delete</span>
                    </button>

                </div>

            )}

        </div>

    );

}

export default AnnouncementItem;