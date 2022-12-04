import React from "react";
import { PlayerTemplateModel } from "./model";
import "./player-template.css";
import { VideoPlayer } from "../../features/background-video-player";
import MusicPlayerModal from "../../features/music-player-modal/music-player-modal";

export const PlayerTemplate = (model: PlayerTemplateModel) => {
  return (
    <>
      <VideoPlayer video={model.songList[0].video} />
      <MusicPlayerModal />
    </>
  );
};
