import React from "react";
import { Divider, List, ListItem, ListItemButton } from "@mui/material";
import { CustomLink } from "../../custom-link";
import {
  MenuModel,
  MenutTypesEnum,
  menuTypeEnumToMenuModel,
} from "../helper/menu-creator";

export function MenuDrawer() {
  const menuMapped = menuTypeEnumToMenuModel.get(
    MenutTypesEnum.drawer
  ) as MenuModel[];
  return (
    <>
      <List>
        {menuMapped.map((value) => (
          <ListItem disablePadding key={value.title}>
            <ListItemButton>
              <CustomLink href={value.href} title={value.title} />
            </ListItemButton>
          </ListItem>
        ))}
        <Divider />
      </List>
    </>
  );
}
