import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#36213E",
    },
    secondary: {
      main: "#554971",
    },
    light: {
      main: "",
    },
    dark: {
      main: "",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
