import { VideoTypeEnum } from "../../../features/background-video-player/model/background-video-player-model";

export interface PlayerSongModel {
  name: string;
  artist: string;
  photo: string;
  video: VideoTypeEnum;
}
