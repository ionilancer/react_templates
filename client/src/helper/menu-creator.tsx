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
];
const drawerMenu: MenuModel[] = [...defaultMenu];
drawerMenu.push({
  href: "/template/templateTest",
  title: "Search",
});

export const menuTypeEnumToMenuModel = new Map<MenutTypesEnum, MenuModel[]>([
  [MenutTypesEnum.default, defaultMenu],
  [MenutTypesEnum.drawer, drawerMenu],
]);
