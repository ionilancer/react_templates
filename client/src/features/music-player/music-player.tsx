import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { VideoPlayerModel } from "./model/music-player-model";
import { getPlayer } from "./components/getPlayer";

export default function MusicPlayer(model: VideoPlayerModel) {
  const theme = useTheme();
  const duration = 200; // seconds
  const [position, setPosition] = React.useState(200);
  const [paused, setPaused] = React.useState(false);

  const mainIconColor = theme.palette.mode === "dark" ? "#fff" : "#000";
  const lightIconColor =
    theme.palette.mode === "dark" ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)";
  return getPlayer(
    position,
    duration,
    setPosition,
    theme,
    mainIconColor,
    paused,
    setPaused,
    lightIconColor
  );
}
