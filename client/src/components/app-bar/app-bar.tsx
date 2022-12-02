import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { MenuContainer } from "../menu";
import { useTheme } from "@mui/material";
import { ThemeContext } from "../../context/theme-context";
import { AppBarModel } from "./app-bar-model";
import { MenutTypesEnum } from "../../helper/menu-creator";

export function AppNav({ title }: AppBarModel) {
  const themeContext = React.useContext(ThemeContext);
  const theme = useTheme();
  const isDarkTheme = theme.palette.mode === "dark";
  const onclick = () => {
    const changeToMode = themeContext.themeMode === "dark" ? "light" : "dark";
    const setThemeModel = themeContext.setThemeMode as React.Dispatch<
      React.SetStateAction<string>
    >;
    setThemeModel(changeToMode);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <MenuContainer menu={MenutTypesEnum.default} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <IconButton sx={{ ml: 1 }} color="inherit" onClick={onclick}>
            {isDarkTheme ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
