import { FaUtensils } from "react-icons/fa";

function MenuCard() {
  return (
    <div className="dashboard-card">

      <div className="card-header">
        <FaUtensils />
        <h3>Today's Menu</h3>
      </div>

      <div className="meal-row">
        <span>Breakfast</span>
        <strong>Idli & Sambar</strong>
      </div>

      <div className="meal-row">
        <span>Lunch</span>
        <strong>Rice, Dal & Paneer</strong>
      </div>

      <div className="meal-row">
        <span>Snacks</span>
        <strong>Samosa</strong>
      </div>

      <div className="meal-row">
        <span>Dinner</span>
        <strong>Roti & Sabji</strong>
      </div>

    </div>
  );
}

export default MenuCard;