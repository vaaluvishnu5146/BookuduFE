import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/AuthenticationJourney/Login/Login";
import AppJourney from "./Pages/AuthorizedJourney";
import Listings from "./Pages/AuthorizedJourney/Listings/Listings";
import Bookings from "./Pages/AuthorizedJourney/Bookings/Bookings";
import AccountSettings from "./Pages/AuthorizedJourney/Settings/Settings";

import DashboardJourney from "./Pages/DashboardJourney/index";
import CreateBookingsPage from "./Pages/DashboardJourney/Bookings/CreateBookings.dashboard";
import ManageBookingsPage from "./Pages/DashboardJourney/Bookings/ManageBookings.dashboard";
import CreateHallPage from "./Pages/DashboardJourney/HallModule/CreateHall.dashboard";
import ManageHallPage from "./Pages/DashboardJourney/HallModule/ManageHall.dashboard";
import { useAuth } from "./Context/Authentication.context";

function App() {
  const { decoded = {} } = useAuth();

  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Login} />
        {decoded && decoded.role.includes("user") && (
          <Route path="/app" Component={AppJourney}>
            <Route path="halls" Component={Listings} />
            <Route path="bookings" Component={Bookings} />
            <Route path="account" Component={AccountSettings} />
          </Route>
        )}
        {decoded && decoded.role.includes("admin") && (
          <Route path="/dashboard" Component={DashboardJourney}>
            <Route path="createHall" Component={CreateHallPage} />
            <Route path="manageHall" Component={ManageHallPage} />
            <Route path="createBookings" Component={CreateBookingsPage} />
            <Route path="manageBookings" Component={ManageBookingsPage} />
          </Route>
        )}
      </Routes>
    </div>
  );
}

export default App;
