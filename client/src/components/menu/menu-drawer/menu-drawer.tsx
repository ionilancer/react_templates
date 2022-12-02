import React from "react";
import { List, ListItem, ListItemButton, ListItemIcon } from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { CustomLink } from "../../custom-link";
import {
  MenuModel,
  MenutTypesEnum,
  menuTypeEnumToMenuModel,
} from "../../../helper/menu-creator";

export function MenuDrawer() {
  const menuMapped = menuTypeEnumToMenuModel.get(
    MenutTypesEnum.drawer
  ) as MenuModel[];
  return (
    <>
      <List>
        {menuMapped.map((value, index) => (
          <ListItem disablePadding key={value.title}>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <CustomLink href={value.href} title={value.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
}
