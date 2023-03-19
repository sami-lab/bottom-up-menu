import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#2196F3",
      text: "#909090",
    },
    secondary: {
      main: "#fff",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    body2: {
      fontSize: "14px",
    },
    small: {
      fontSize: "12px",
    },
  },
});

export default theme;
