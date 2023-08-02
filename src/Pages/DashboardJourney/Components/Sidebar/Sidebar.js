import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import BasicList from "../Lists/BasicList";

function Sidebar() {
  return (
    <aside className="sidebar" id="dashboard-sidebar">
      <div className="sidebar-header"></div>
      <div className="sidebar-body">
        <BasicList />
      </div>
      <div className="sidebar-footer"></div>
    </aside>
  );
}

export default Sidebar;
