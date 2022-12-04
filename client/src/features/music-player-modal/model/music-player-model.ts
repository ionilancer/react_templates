export enum SongTypeEnum {
  default = "default",
}
export const songTypeToFileMap = new Map<SongTypeEnum, any>([
  [SongTypeEnum.default, "URL"],
]);
