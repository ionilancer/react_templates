import React, { useState } from "react";
import "./App.css";
import { Home, TemplatePage } from "./pages/";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { SorryPage } from "./pages/sorry-page";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeContext } from "./context/theme-context";
import { darkTheme, lightTheme } from "./config/defaultThemeConfig";

function App() {
  const [mode, setMode] = useState("dark");
  const selectedTheme = mode === "dark" ? darkTheme : lightTheme;
  const value = {
    themeMode: mode,
    setThemeMode: setMode,
  };
  return (
    <>
      <ThemeContext.Provider value={value}>
        <ThemeProvider theme={selectedTheme}>
          <CssBaseline />
          <div className="Page">
            <div className="sideBar"></div>
            <div className="mainWindow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/template/:templateCode"
                  element={<TemplatePage />}
                />
                <Route path="/sorry" element={<SorryPage />} />
              </Routes>
            </div>
            <div className="rightBar"></div>
          </div>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
