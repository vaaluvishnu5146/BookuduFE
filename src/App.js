import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/AuthenticationJourney/Login/Login";
import AppJourney from "./Pages/AuthorizedJourney";
import Listings from "./Pages/AuthorizedJourney/Listings/Listings";
import Bookings from "./Pages/AuthorizedJourney/Bookings/Bookings";
import DashboardJourney from "./Pages/DashboardJourney/index";
import CreateBookingsPage from "./Pages/DashboardJourney/Bookings/CreateBookings.dashboard";
import ManageBookingsPage from "./Pages/DashboardJourney/Bookings/ManageBookings.dashboard";
import CreateHallPage from "./Pages/DashboardJourney/HallModule/CreateHall.dashboard";
import ManageHallPage from "./Pages/DashboardJourney/HallModule/ManageHall.dashboard";

function App() {
  console.log(process.env.REACT_APP_BASE_URL_DEVELOPMENT, process.env.NODE_ENV);
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/app" Component={AppJourney}>
          <Route path="halls" Component={Listings} />
          <Route path="bookings" Component={Bookings} />
        </Route>
        <Route path="/dashboard" Component={DashboardJourney}>
          <Route path="createHall" Component={CreateHallPage} />
          <Route path="manageHall" Component={ManageHallPage} />
          <Route path="createBookings" Component={CreateBookingsPage} />
          <Route path="manageBookings" Component={ManageBookingsPage} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
