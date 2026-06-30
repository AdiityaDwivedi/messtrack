import DashboardLayout from "../layouts/DashboardLayout";

import MenuCard from "../components/dashboard/MenuCard";
import AnnouncementCard from "../components/dashboard/AnnouncementCard";
import PollCard from "../components/dashboard/PollCard";
import QuickActionCard from "../components/dashboard/QuickActionCard";
import StatsCard from "../components/dashboard/StatsCard";

import {
FaUtensils,
FaBullhorn,
FaPoll,
FaClock
} from "react-icons/fa";
import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <DashboardLayout>
        <div className="stats-grid">

        <StatsCard
            icon={<FaUtensils />}
            title="Today's Menu"
            value="Available"
            subtitle="Check what's cooking"
            color="#3b82f6"
        />

        <StatsCard
            icon={<FaBullhorn />}
            title="Announcements"
            value="2 New"
            subtitle="Latest updates"
            color="#22c55e"
        />

        <StatsCard
            icon={<FaPoll />}
            title="Active Poll"
            value="1 Active"
            subtitle="Your vote matters"
            color="#8b5cf6"
        />

        <StatsCard
            icon={<FaClock />}
            title="Next Meal"
            value="Lunch"
            subtitle="12:30 PM - 2:00 PM"
            color="#f97316"
        />
          </div>

      <div className="dashboard-grid">

        <MenuCard />

        <AnnouncementCard />

        <PollCard />

        <QuickActionCard />

      </div>

    </DashboardLayout>
  );
}

export default Dashboard;