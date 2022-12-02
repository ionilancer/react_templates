import { TemplateBaseModel } from "../../model/template-base-model";
export interface TemplateModel extends TemplateBaseModel {}
export const createTemplateModel = (): TemplateModel => {
  return {
    code: "templateTest",
    name: "Test template",
  };
};
