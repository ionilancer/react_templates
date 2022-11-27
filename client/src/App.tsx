import React from "react";
import "./App.css";
import { Home, TemplatePage } from "./pages/";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { SorryPage } from "./pages/sorry-page";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
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
    </>
  );
}

export default App;
