import React from "react";
import { TemplateModel } from "../../Models";

export const TemplateTest = (model: TemplateModel) => {
  console.log("TemplateTest", model.code);
  return (
    <>
      <p>Template Test</p>
    </>
  );
};
