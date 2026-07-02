import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import MenuCard from "../components/dashboard/MenuCard";
import AnnouncementCard from "../components/dashboard/AnnouncementCard";
import PollCard from "../components/dashboard/PollCard";
import QuickActionCard from "../components/dashboard/QuickActionCard";
import StatsCard from "../components/dashboard/StatsCard";

import { useAuth } from "../context/AuthContext";

import { getTodaysMenu } from "../services/menuService";
import { getLatestAnnouncements } from "../services/announcementService";
import { getActivePolls } from "../services/pollService";

import {
    FaUtensils,
    FaBullhorn,
    FaPoll,
    FaClock
} from "react-icons/fa";

import "../styles/Dashboard.css";

function Dashboard() {

    const { user } = useAuth();

    const [menu, setMenu] = useState(null);
    const [announcements, setAnnouncements] = useState([]);
    const [poll, setPoll] = useState(null);

    useEffect(() => {

        if (!user) return;

        loadDashboard();

    }, [user]);

    const loadDashboard = async () => {

        try {

            const menuResponse = await getTodaysMenu(
                user.collegeName,
                user.hostelName
            );

            setMenu(menuResponse.data);

        } catch (e) {
            setMenu(null);
        }

        try {

            const announcementResponse =
                await getLatestAnnouncements(
                    user.collegeName,
                    user.hostelName
                );

            setAnnouncements(announcementResponse.data);

        } catch (e) {
            setAnnouncements([]);
        }

        try {

            const pollResponse =
                await getActivePolls(
                    user.collegeName,
                    user.hostelName
                );

            if (pollResponse.data.length > 0) {
                setPoll(pollResponse.data[0]);
            } else {
                setPoll(null);
            }

        } catch (e) {
            setPoll(null);
        }

    };

    return (

        <DashboardLayout>

            <div className="stats-grid">

                <StatsCard
                    icon={<FaUtensils />}
                    title="Today's Menu"
                    value={menu ? "Available" : "Not Uploaded"}
                    subtitle="Today's meals"
                    color="#3b82f6"
                />

                <StatsCard
                    icon={<FaBullhorn />}
                    title="Announcements"
                    value={announcements.length}
                    subtitle="Latest updates"
                    color="#22c55e"
                />

                <StatsCard
                    icon={<FaPoll />}
                    title="Active Poll"
                    value={poll ? "Live" : "None"}
                    subtitle="Vote now"
                    color="#8b5cf6"
                />

                <StatsCard
                    icon={<FaClock />}
                    title="Next Meal"
                    value="Lunch"
                    subtitle="12:30 PM"
                    color="#f97316"
                />

            </div>

            <div className="dashboard-grid">

                <MenuCard menu={menu} />

                <AnnouncementCard announcements={announcements} />

                <PollCard poll={poll} />

                <QuickActionCard />

            </div>

        </DashboardLayout>

    );

}

export default Dashboard;