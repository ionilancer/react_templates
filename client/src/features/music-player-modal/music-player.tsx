import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Widget } from "./music-player-util";
import {
  songInfo,
  getSlider,
  getControls,
  getVolume,
} from "./music-player-components";
import { VideoPlayerModel } from "./model/music-player-model";

export default function MusicPlayer(model: VideoPlayerModel) {
  const theme = useTheme();
  const duration = 200; // seconds
  const [position, setPosition] = React.useState(200);
  const [paused, setPaused] = React.useState(false);

  const mainIconColor = theme.palette.mode === "dark" ? "#fff" : "#000";
  const lightIconColor =
    theme.palette.mode === "dark" ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)";
  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        position: "absolute",
        bottom: "0vh",
      }}
    >
      <Widget>
        {songInfo()}
        {getSlider(position, duration, setPosition, theme)}
        {getControls(mainIconColor, paused, setPaused)}
        {getVolume(lightIconColor, theme)}
      </Widget>
    </Box>
  );
}
