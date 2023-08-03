import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Home from "@mui/icons-material/Home";
import Calendar from "@mui/icons-material/CalendarMonth";
import Settings from "@mui/icons-material/Settings";
import { useNavigate } from "react-router-dom";

export default function BottomNav() {
  const [value, setValue] = React.useState(0);
  const navigator = useNavigate();

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          console.log(newValue);
          setValue(newValue);
          if (value === 0) {
            navigator("/app/halls");
          } else if (value === 1) {
            navigator("/app/bookings");
          } else if (value === 2) {
            navigator("/app/account");
          }
        }}
      >
        <BottomNavigationAction label="Home" icon={<Home />} />
        <BottomNavigationAction label="Bookings" icon={<Calendar />} />
        <BottomNavigationAction label="Account" icon={<Settings />} />
      </BottomNavigation>
    </Box>
  );
}
