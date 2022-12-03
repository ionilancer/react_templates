import React from "react";
import { PlayerSongModel } from "../../templates/player-template/model";
import "./music-player.css";

export const MusicPlayer = (model: PlayerSongModel) => {
  return (
    <>
      <div className="music-player">
        <div className="song-info-container">
          <h2>{model.name}</h2>
          <h5>{model.artist}</h5>
        </div>
      </div>
    </>
  );
};
