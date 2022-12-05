import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { CoverImage } from "../utils/music-player-util";

export function songInfo() {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <CoverImage>
        <img alt="Song name - Album" src="" />
      </CoverImage>
      <Box sx={{ ml: 1.5, minWidth: 0 }}>
        <Typography variant="caption" color="text.secondary" fontWeight={500}>
          Artist
        </Typography>
        <Typography noWrap>
          <b>Song name (Remix)</b>
        </Typography>
        <Typography noWrap letterSpacing={-0.25}>
          Album name
        </Typography>
      </Box>
    </Box>
  );
}
