import React from "react";
import { AppNav } from "../../components/app-bar/app-bar";
import { TemplateModel } from "./model";

export const TemplateTest = (model: TemplateModel) => {
  return (
    <>
      <AppNav {...{ title: "Template" }} />
      <p>Template Test</p>
    </>
  );
};
