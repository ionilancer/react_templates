import React, { useState } from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeContext } from "./context/theme-context";
import { darkTheme, lightTheme } from "./config/defaultThemeConfig";
import { CustomDrawer } from "./components/drawer/";
import { RouterMapper } from "./routes";

function App() {
  const [mode, setMode] = useState("dark");
  const selectedTheme = mode === "dark" ? darkTheme : lightTheme;
  const themeModel = {
    themeMode: mode,
    setThemeMode: setMode,
  };
  return (
    <>
      <ThemeContext.Provider value={themeModel}>
        <ThemeProvider theme={selectedTheme}>
          <CssBaseline />
          <CustomDrawer />
          <RouterMapper />
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
