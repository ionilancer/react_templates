import { VideoTypeEnum } from "../../../features/background-video-player/model/background-video-player-model";
import {
  TemplateBaseModel,
  TemplateCodeEnum,
} from "../../model/template-base-model";
import { PlayerSongModel } from "./player-song-model";

export interface PlayerTemplateModel extends TemplateBaseModel {
  songList: PlayerSongModel[];
}
export const createPlayerTemplateModel = (): PlayerTemplateModel => {
  return {
    code: TemplateCodeEnum.playerTemplate,
    name: "Player",
    songList: [
      {
        name: "Song Name",
        artist: "Artist",
        photo: "",
        video: VideoTypeEnum.default,
        mp4: "./public/video_vertical.mp4",
      },
    ],
  };
};
