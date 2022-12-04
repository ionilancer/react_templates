import React from "react";
import { PlayerTemplateModel } from "./model";
import "./player-template.css";
import { VideoPlayer } from "../../features/background-video-player";
import MusicPlayer from "../../features/music-player-modal/music-player";

export const PlayerTemplate = (model: PlayerTemplateModel) => {
  return (
    <>
      <VideoPlayer video={model.songList[0].video} />
      <MusicPlayer url={model.songList[0].photo} />
    </>
  );
};
