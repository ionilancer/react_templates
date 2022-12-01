export enum MenutTypesEnum {
  default = "default",
}
export interface MenuModel {
  href: string;
  title: string;
}

const defaultMenu: MenuModel[] = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/template/templateTest",
    title: "Template Test",
  },
];
export const menuTypeEnumToMenuModel = new Map<MenutTypesEnum, MenuModel[]>([
  [MenutTypesEnum.default, defaultMenu],
]);
