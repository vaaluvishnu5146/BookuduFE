import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";

function DashboardJourney() {
  return (
    <section
      className="dashboard-layout-container"
      id="dashboard-layout-container"
    >
      <Sidebar />
      <div className="content-container">
        <Outlet />
      </div>
    </section>
  );
}

export default DashboardJourney;
