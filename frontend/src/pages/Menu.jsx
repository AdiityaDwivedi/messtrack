import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";
import MenuDayCard from "../components/menu/MenuDayCard";
import MenuModal from "../components/menu/MenuModal";

import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

import {
    getMenus,
    createMenu
} from "../services/menuService";

import {
    FaPlus,
    FaUtensils
} from "react-icons/fa";

import "../styles/Menu.css";

const dayOrder = [
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
    "SUNDAY"
];

function Menu() {

    const { user } = useAuth();

    const [menus, setMenus] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);

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

            const sortedMenus = [...response.data].sort(
                (a, b) =>
                    dayOrder.indexOf(a.day) -
                    dayOrder.indexOf(b.day)
            );

            setMenus(sortedMenus);

        } catch (error) {

            console.error(error);
            setMenus([]);

        } finally {

            setLoading(false);

        }

    };

    const handleCreateMenu = async (formData) => {

        try {

            await createMenu({
                ...formData,
                collegeName: user.collegeName,
                hostelName: user.hostelName
            });
            toast.success("Menu created successfully");

            setShowModal(false);

            await loadMenus();

        } catch (error) {

            console.error(error);

            toast.error(
                error.response?.data?.message ||
                "Unable to create menu."
            );

        }

    };

    const today = new Date()
        .toLocaleDateString("en-US", {
            weekday: "long"
        })
        .toUpperCase();

    const isAdmin =
        user.role === "HOSTEL_ADMIN" ||
        user.role === "SUPER_ADMIN";

    return (

        <DashboardLayout>

            <div className="menu-page-header">

                <div className="menu-title">

                    <FaUtensils className="menu-title-icon" />

                    <h1>Weekly Menu</h1>

                </div>

                {isAdmin && (

                    <button
                        className="add-menu-btn"
                        onClick={() => setShowModal(true)}
                    >
                        <FaPlus />
                        Add Menu
                    </button>

                )}

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
                            key={menu.id}
                            menu={menu}
                            isToday={menu.day === today}
                            isAdmin={isAdmin}
                            onEdit={(menu) => console.log("Edit", menu)}
                            onDelete={(menu) => console.log("Delete", menu)}
                        />

                    ))}

                </div>

            )}

            <MenuModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                onSubmit={handleCreateMenu}
                initialData={null}
                title="Add Weekly Menu"
            />

        </DashboardLayout>

    );

}

export default Menu;