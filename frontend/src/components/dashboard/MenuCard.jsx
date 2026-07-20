import { FaUtensils } from "react-icons/fa";
import { Link } from "react-router-dom";

function MenuCard({ menu }) {

    return (

        <Link
            to="/menu"
            style={{
                textDecoration: "none",
                color: "inherit"
            }}
        >

            <div className="dashboard-card">

                <div className="card-header">

                    <FaUtensils />

                    <h3>Today's Menu</h3>

                </div>

                {menu ? (

                    <>

                        <div className="meal-row">

                            <span>Breakfast</span>

                            <strong>{menu.breakfast}</strong>

                        </div>

                        <div className="meal-row">

                            <span>Lunch</span>

                            <strong>{menu.lunch}</strong>

                        </div>

                        <div className="meal-row">

                            <span>Snacks</span>

                            <strong>{menu.snacks}</strong>

                        </div>

                        <div className="meal-row">

                            <span>Dinner</span>

                            <strong>{menu.dinner}</strong>

                        </div>

                    </>

                ) : (

                    <p>No menu uploaded.</p>

                )}

            </div>

        </Link>

    );

}

export default MenuCard;