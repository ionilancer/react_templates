import React from "react";
import { AppNav } from "../../components/app-bar/app-bar";
import { TemplateModel } from "../template-test/model";

export const TemplateColor = (model: TemplateModel) => {
  return (
    <>
      <AppNav {...{ title: "Template" }} />
      <p>Template Color</p>
    </>
  );
};
