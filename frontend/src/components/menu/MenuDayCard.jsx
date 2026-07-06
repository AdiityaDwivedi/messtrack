import {
    FaSun,
    FaUtensils,
    FaCoffee,
    FaMoon,
    FaEdit,
    FaTrash
} from "react-icons/fa";

function MenuDayCard({
    menu,
    isToday,
    isAdmin,
    onEdit,
    onDelete
}) {

    return (
        <div className={`menu-card ${isToday ? "today-card" : ""}`}>

            <div className="menu-card-header">

                <h2>{menu.day}</h2>

                {isToday && (
                    <span className="today-badge">
                        Today
                    </span>
                )}

            </div>

            <div className="meal-item">
                <FaCoffee />
                <div>
                    <span>Breakfast</span>
                    <strong>{menu.breakfast}</strong>
                </div>
            </div>

            <div className="meal-item">
                <FaUtensils />
                <div>
                    <span>Lunch</span>
                    <strong>{menu.lunch}</strong>
                </div>
            </div>

            <div className="meal-item">
                <FaSun />
                <div>
                    <span>Snacks</span>
                    <strong>{menu.snacks || "Not Available"}</strong>
                </div>
            </div>

            <div className="meal-item">
                <FaMoon />
                <div>
                    <span>Dinner</span>
                    <strong>{menu.dinner}</strong>
                </div>
            </div>

            {isAdmin && (

                <div className="menu-actions">

                    <button
                        className="edit-btn"
                        onClick={() => onEdit(menu)}
                    >
                        <FaEdit />
                        Edit
                    </button>

                    <button
                        className="delete-btn"
                        onClick={() => onDelete(menu)}
                    >
                        <FaTrash />
                        Delete
                    </button>

                </div>

            )}

        </div>
    );
}

export default MenuDayCard;