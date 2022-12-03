export interface BackgroundVideoPlayerModel {
  video: VideoTypeEnum;
}
export enum VideoTypeEnum {
  default = "default",
}

export const videoTypeToVideoMap = new Map<VideoTypeEnum, any>([
  [VideoTypeEnum.default, require("../public/video_vertical.mp4")],
]);
