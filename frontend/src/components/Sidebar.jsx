import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import {
    FaHome,
    FaUtensils,
    FaBullhorn,
    FaPoll,
    FaUserShield,
    FaSignOutAlt
} from "react-icons/fa";

import "../styles/Sidebar.css";

function Sidebar({ collapsed }) {

    const { user } = useAuth();
    const location = useLocation();

    const menu = [
        {
            title: "Dashboard",
            icon: <FaHome />,
            path: "/dashboard"
        },
        {
            title: "Menu",
            icon: <FaUtensils />,
            path: "/menu"
        },
        {
            title: "Announcements",
            icon: <FaBullhorn />,
            path: "/announcements"
        },
        {
            title: "Polls",
            icon: <FaPoll />,
            path: "/polls"
        }
    ];

    return (

        <aside
            className={
                collapsed
                    ? "sidebar collapsed"
                    : "sidebar"
            }
        >
            <div className="sidebar-header">

              

              <div className="logo">

                  <div className="logo-icon">
                      🍽
                  </div>

                  {!collapsed && (

                      <div className="logo-text">

                          <h2>MessTrack</h2>

                          <p>Smart Dining</p>

                      </div>

                  )}

              </div>

              </div>

            <nav>

                {menu.map(item => (

                    <Link
                        key={item.path}
                        to={item.path}
                        className={
                            location.pathname === item.path
                                ? "nav-link active"
                                : "nav-link"
                        }
                    >

                        {item.icon}

                        {!collapsed && <span>{item.title}</span>}

                    </Link>

                ))}

                {user?.role !== "STUDENT" && (

                    <Link
                        to="/admin"
                        className="nav-link"
                    >

                        <FaUserShield />

                        {!collapsed && <span>Admin</span>}

                    </Link>

                )}

            </nav>

            <div className="sidebar-footer">

                {!collapsed && (

                    <>

                        <h4>{user?.name}</h4>

                        <p>{user?.role}</p>

                    </>

                )}

                <button className="logout">

                    <FaSignOutAlt />

                    {!collapsed && "Logout"}

                </button>

            </div>

        </aside>

    );

}

export default Sidebar;