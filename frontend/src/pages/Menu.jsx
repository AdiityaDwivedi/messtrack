import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";
import MenuDayCard from "../components/menu/MenuDayCard";

import { useAuth } from "../context/AuthContext";
import { getMenus } from "../services/menuService";

import "../styles/Menu.css";

function Menu() {

    const { user } = useAuth();

    const [menus, setMenus] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        if (!user) return;

        loadMenus();

    }, [user]);

    const loadMenus = async () => {

        try {

            const response = await getMenus(
                user.collegeName,
                user.hostelName
            );

            setMenus(response.data);

        } catch (error) {

            console.error(error);
            setMenus([]);

        } finally {

            setLoading(false);

        }

    };

    const today = new Date()
        .toLocaleDateString("en-US", { weekday: "long" })
        .toUpperCase();

    return (

        <DashboardLayout>

            <div className="menu-page-header">

                <h1>Weekly Menu</h1>

            </div>

            {loading ? (

                <div className="empty-menu">
                    <h2>Loading...</h2>
                </div>

            ) : menus.length === 0 ? (

                <div className="empty-menu">

                    <h2>No Menu Available</h2>

                    <p>
                        The hostel admin hasn't uploaded the weekly menu yet.
                    </p>

                </div>

            ) : (

                <div className="menu-grid">

                    {menus.map((menu) => (

                        <MenuDayCard
                            key={menu.day}
                            menu={menu}
                            isToday={menu.day === today}
                        />

                    ))}

                </div>

            )}

        </DashboardLayout>

    );

}

export default Menu;