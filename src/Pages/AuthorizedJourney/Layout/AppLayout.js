import React from "react";
import BottomNav from "../Components/BottomNav/BottomNav";
import "./AppLayout.css";

function AppLayout({ children }) {
  return (
    <section className="app-layout-container">
      <div className="app-layout-body">{children}</div>
      <BottomNav />
    </section>
  );
}

export default AppLayout;
