import React from "react";
import { PlayerTemplateModel } from "./model";
import { MusicPlayer } from "../../features/music-player";
import "./player-template.css";
import { VideoPlayer } from "../../features/background-video-player";

export const PlayerTemplate = (model: PlayerTemplateModel) => {
  return (
    <>
      <VideoPlayer video={model.songList[0].video} />
      <MusicPlayer {...model.songList[0]} />
    </>
  );
};
