import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    secondary: {
      light: "#0066ff",
      main: "#fff;",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#ffcc00",
    },
  },
});
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    secondary: {
      light: "#0066ff",
      main: "#fff;",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#ffcc00",
    },
  },
});
