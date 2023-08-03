import React from "react";
import { Outlet } from "react-router-dom";
import BottomNav from "./Components/BottomNav/BottomNav";
import AppLayout from "./Layout/AppLayout";

function AppJourney() {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
}

export default AppJourney;
