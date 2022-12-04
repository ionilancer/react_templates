import React, { useState } from "react";
import { PlayerSongModel } from "../../templates/player-template/model";
import { ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import AudioPlayer from "material-ui-audio-player";
import "./music-player.css";

export const MusicPlayer = (model: PlayerSongModel) => {
  const muiTheme = createTheme({});
  const [player, setPLayer] = useState<HTMLAudioElement | null>(null);
  console.log("player", player);
  return (
    <>
      <div className="music-player">
        <div className="song-info-container">
          <h2>{model.name}</h2>
          <h5>{model.artist}</h5>
          <h6 onClick={playAudio(player)}>start</h6>
          <h6 onClick={pauseAuido(player)}>stop</h6>
          <div className="audio-control-container">
            <ThemeProvider theme={muiTheme}>
              <AudioPlayer
                src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                getPlayer={(player) => setPLayer(player)}
              />
            </ThemeProvider>
          </div>
        </div>
      </div>
    </>
  );
};
function playAudio(
  player: HTMLAudioElement | null
): React.MouseEventHandler<HTMLHeadingElement> | undefined {
  return async () => {
    await player?.play();
  };
}
function pauseAuido(
  player: HTMLAudioElement | null
): React.MouseEventHandler<HTMLHeadingElement> {
  return () => {
    console.log(player?.volume);
    player?.pause();
  };
}
