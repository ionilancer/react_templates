import { TemplateBaseModel } from "../../model/template-base-model";

export interface TemplateColorModel extends TemplateBaseModel {}
export const createTemplateColorModel = (): TemplateColorModel => {
  return {
    code: "templateColor",
    name: "Template color",
  };
};
