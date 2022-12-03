import React from "react";
import {
  BackgroundVideoPlayerModel,
  videoTypeToVideoMap,
} from "./model/background-video-player-model";
import "./video-player.css";

export const VideoPlayer = (model: BackgroundVideoPlayerModel) => {
  const { video } = model;
  const videoSrc = videoTypeToVideoMap.get(video);
  return (
    <>
      <div className="video-container">
        <video autoPlay muted loop>
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
    </>
  );
};
