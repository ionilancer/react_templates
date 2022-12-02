export enum MenutTypesEnum {
  default = "default",
  drawer = "drawer",
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
const drawerMenu: MenuModel[] = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/template/templateTest",
    title: "Search",
  },
];
export const menuTypeEnumToMenuModel = new Map<MenutTypesEnum, MenuModel[]>([
  [MenutTypesEnum.default, defaultMenu],
  [MenutTypesEnum.drawer, drawerMenu],
]);
