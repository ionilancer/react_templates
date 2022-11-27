import { LinkProps, Link as MuiLink } from "@mui/material";
import { Link as ReactRouterLink } from "react-router-dom";

import React, { FC } from "react";

export const CustomLink: FC<LinkProps> = (props) => {
  return (
    <MuiLink
      {...props}
      component={ReactRouterLink}
      to={props.href ?? "/"}
      underline="none"
    >
      {props.title}
    </MuiLink>
  );
};
