import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import BasicListItem from "./BasicListItem";
import { NavLink } from "react-router-dom";

export default function BasicList() {
  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <nav aria-label="main mailbox folders">
        <List>
          <NavLink to="/dashboard/manageHall">
            <BasicListItem label="Hall" />
          </NavLink>
          <NavLink to="/dashboard/manageBookings">
            <BasicListItem label="Bookings" />
          </NavLink>
        </List>
      </nav>
    </Box>
  );
}
