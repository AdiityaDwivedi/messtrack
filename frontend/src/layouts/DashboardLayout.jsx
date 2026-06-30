import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import "../styles/Layout.css";

function DashboardLayout({ children }) {

  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className="dashboard-layout">

      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />

      <div
        className={
          collapsed
            ? "dashboard-main collapsed"
            : "dashboard-main"
        }
      >

        <Navbar
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        />

        <main className="dashboard-content">
          {children}
        </main>

      </div>

    </div>
  );
}

export default DashboardLayout;