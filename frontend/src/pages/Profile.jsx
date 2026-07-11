import DashboardLayout from "../layouts/DashboardLayout";
import { useAuth } from "../context/AuthContext";

import {
    FaUserCircle,
    FaEnvelope,
    FaUniversity,
    FaHome,
    FaUserShield,
    FaSignOutAlt
} from "react-icons/fa";

import "../styles/Profile.css";

function Profile() {

    const { user, logout } = useAuth();

    return (

        <DashboardLayout>

            <div className="page-header">

                <div className="page-title">

                    <FaUserCircle className="page-icon" />

                    <h1>My Profile</h1>

                </div>

            </div>

            <div className="profile-card">

                <div className="profile-avatar">

                    <FaUserCircle />

                    <h2>{user?.name}</h2>

                    <p>{user?.role}</p>

                </div>

                <div className="profile-details">

                    <div className="profile-item">

                        <FaEnvelope />

                        <div>

                            <span>Email</span>

                            <strong>{user?.email}</strong>

                        </div>

                    </div>

                    <div className="profile-item">

                        <FaUniversity />

                        <div>

                            <span>College</span>

                            <strong>{user?.collegeName}</strong>

                        </div>

                    </div>

                    <div className="profile-item">

                        <FaHome />

                        <div>

                            <span>Hostel</span>

                            <strong>{user?.hostelName}</strong>

                        </div>

                    </div>

                    <div className="profile-item">

                        <FaUserShield />

                        <div>

                            <span>Role</span>

                            <strong>{user?.role}</strong>

                        </div>

                    </div>

                </div>

                <div className="profile-actions">

                    <button
                        className="delete-btn"
                        onClick={logout}
                    >
                        <FaSignOutAlt />
                        Logout
                    </button>

                </div>

            </div>

        </DashboardLayout>

    );

}

export default Profile;