import React from "react";
import { Outlet } from "react-router-dom";

function AppJourney() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default AppJourney;
