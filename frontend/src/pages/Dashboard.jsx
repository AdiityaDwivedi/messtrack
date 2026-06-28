import DashboardLayout from "../layouts/DashboardLayout";

import MenuCard from "../components/dashboard/MenuCard";
import AnnouncementCard from "../components/dashboard/AnnouncementCard";
import PollCard from "../components/dashboard/PollCard";
import QuickActionCard from "../components/dashboard/QuickActionCard";

import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <DashboardLayout>

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