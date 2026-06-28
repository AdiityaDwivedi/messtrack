import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/Sidebar.css";

import {
  FaHome,
  FaUtensils,
  FaBullhorn,
  FaPoll,
  FaUserShield,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {
  const { user } = useAuth();
  const location = useLocation();

  const menuItems = [
    {
      title: "Dashboard",
      icon: <FaHome />,
      path: "/dashboard",
    },
    {
      title: "Menu",
      icon: <FaUtensils />,
      path: "/menu",
    },
    {
      title: "Announcements",
      icon: <FaBullhorn />,
      path: "/announcements",
    },
    {
      title: "Polls",
      icon: <FaPoll />,
      path: "/polls",
    },
  ];

  return (
    <aside className="sidebar">

        <div className="sidebar-logo">

        <div className="logo-icon">
        🍽
        </div>

        <div>
        <h2>MessTrack</h2>
        <p>Smart Dining</p>
        </div>

        </div>

      <nav>

        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={
              location.pathname === item.path
                ? "sidebar-link active"
                : "sidebar-link"
            }
          >
            {item.icon}
            <span>{item.title}</span>
          </Link>
        ))}

        {user?.role !== "STUDENT" && (
          <Link
            to="/admin"
            className={
              location.pathname === "/admin"
                ? "sidebar-link active"
                : "sidebar-link"
            }
          >
            <FaUserShield />
            <span>Admin</span>
          </Link>
        )}

      </nav>

      <div className="sidebar-footer">
        <strong>{user?.name}</strong>
        <p>{user?.role}</p>

        <button className="logout-btn">
          <FaSignOutAlt />
          Logout
        </button>
      </div>

    </aside>
  );
}

export default Sidebar;