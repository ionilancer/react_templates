import React from "react";
import MenuItem from "@mui/material/MenuItem";
import { CustomLink } from "../custom-link";
import "./menu.css";
import { MenuContainerModel } from "./menu-container-model";
import {
  MenuModel,
  MenutTypesEnum,
  menuTypeEnumToMenuModel,
} from "../../helper/menu-creator";

export function CreateMenu({
  menu = MenutTypesEnum.default,
}: MenuContainerModel) {
  const defaultMenu = menuTypeEnumToMenuModel.get(menu) as MenuModel[];
  return (
    <>
      {defaultMenu.map((menuProps) => {
        return (
          <MenuItem>
            <CustomLink href={menuProps.href} title={menuProps.title} />
          </MenuItem>
        );
      })}
    </>
  );
}
