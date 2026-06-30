import { FaBars } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

import "../styles/Navbar.css";

function Navbar({ collapsed, setCollapsed }) {

    const { user } = useAuth();

    return (

        <header className="navbar">

            <div className="nav-left">

                <button
                    className="menu-btn"
                    onClick={() => setCollapsed(!collapsed)}
                >
                    <FaBars />
                </button>

                <div>

                    <h1>
                        Welcome back, {user?.name} 👋
                    </h1>

                    <p>
                        Here's what's happening today.
                    </p>

                </div>

            </div>

            <div className="nav-user">

                <div className="avatar">

                    {user?.name?.charAt(0)}

                </div>

                <div>

                    <h4>{user?.name}</h4>

                    <p>{user?.role}</p>

                </div>

            </div>

        </header>

    );

}

export default Navbar;