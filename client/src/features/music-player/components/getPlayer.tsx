import * as React from "react";
import { Theme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Widget } from "../utils/music-player-util";
import { getVolume } from "./getVolume";
import { getControls } from "./getControls";
import { getSlider } from "./getSlider";
import { songInfo } from "./songInfo";

export function getPlayer(
  position: number,
  duration: number,
  setPosition: React.Dispatch<React.SetStateAction<number>>,
  theme: Theme,
  mainIconColor: string,
  paused: boolean,
  setPaused: React.Dispatch<React.SetStateAction<boolean>>,
  lightIconColor: string
) {
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
