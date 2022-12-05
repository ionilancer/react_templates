export enum SongTypeEnum {
  default = "default",
}
export interface VideoPlayerModel {
  url: string;
}
export const songTypeToFileMap = new Map<SongTypeEnum, VideoPlayerModel>([
  [SongTypeEnum.default, { url: "urlDefault" }],
]);
